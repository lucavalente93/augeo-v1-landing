import { test, expect } from '@playwright/test';

test('cue keeps contrasting after the introduction and becomes static with reduced motion', async ({ page }) => {
  await page.setViewportSize({width:1440,height:900});
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.goto('/');
  const cue=page.locator('.scroll-cue');
  const readAnimationStates=()=>cue.evaluate(n=>n.getAnimations({subtree:true}).map(a=>a.playState));
  await expect.poll(readAnimationStates).toEqual(['running','running']);
  const timing=await cue.evaluate(n=>n.getAnimations({subtree:true}).map(a=>a.effect!.getTiming()));
  expect(timing.map(t=>[t.duration,t.delay,t.iterations])).toEqual([[5600,300,Infinity],[5600,1280,Infinity]]);
  const before=await cue.boundingBox();
  await cue.evaluate(n=>n.getAnimations({subtree:true}).forEach(a=>a.currentTime=840));
  expect(await cue.boundingBox()).toEqual(before);
  expect(await cue.locator('path').first().evaluate(n=>getComputedStyle(n).transform)).toBe('none');
  await cue.evaluate(n=>n.getAnimations({subtree:true}).forEach(a=>{a.currentTime=3600;a.play();}));
  await expect.poll(readAnimationStates).toEqual(['running','running']);
  const fills = () => cue.locator('path').evaluateAll(nodes => nodes.map(node => getComputedStyle(node).fill));
  const ongoing = await fills();
  await expect.poll(fills).not.toEqual(ongoing);
  await page.emulateMedia({reducedMotion:'reduce'});
  await expect.poll(readAnimationStates).toEqual([]);
  await expect(cue.locator('path').first()).toHaveCSS('fill','rgb(97, 97, 93)');
  await expect(cue.locator('path').last()).toHaveCSS('fill','rgb(97, 97, 93)');
});

test('offscreen and hidden-document suspension resumes elapsed animation time', async ({ page }) => {
  await page.setViewportSize({width:1440,height:900});
  await page.goto('/');
  await page.addStyleTag({content:'body {padding-bottom:200vh;}'});
  const cue=page.locator('.scroll-cue');
  const readAnimationStates=()=>cue.evaluate(n=>n.getAnimations({subtree:true}).map(a=>a.playState));
  await expect.poll(readAnimationStates).toEqual(['running','running']);
  await page.evaluate(()=>window.scrollTo(0,1200));
  await expect.poll(readAnimationStates).toEqual(['paused','paused']);
  const readAnimationTimesMs=()=>cue.evaluate(async node=>{
    const animations=node.getAnimations({subtree:true});
    // playState can change before the pending pause/play task settles.
    await Promise.all(animations.map(animation=>animation.ready));
    return animations.map(animation=>Number(animation.currentTime));
  });
  await page.waitForTimeout(50);
  const pausedAnimationTimesMs=await readAnimationTimesMs();
  await page.waitForTimeout(100);
  expect(await readAnimationTimesMs()).toEqual(pausedAnimationTimesMs);
  await page.evaluate(()=>window.scrollTo(0,0));
  await expect.poll(readAnimationStates).toEqual(['running','running']);
  expect((await readAnimationTimesMs())[0]).toBeGreaterThanOrEqual(pausedAnimationTimesMs[0] - 0.1);
  // Test the visibility handler deterministically; real OS tab switching is a
  // separate manual verification, not implied by this synthetic state.
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
  await expect.poll(readAnimationStates).toEqual(['paused','paused']);
  const hiddenAnimationTimesMs=await readAnimationTimesMs(); await page.waitForTimeout(150); expect(await readAnimationTimesMs()).toEqual(hiddenAnimationTimesMs);
  await page.evaluate(()=>{Reflect.deleteProperty(document,'hidden');document.dispatchEvent(new Event('visibilitychange'));});
  await expect.poll(readAnimationStates).toEqual(['running','running']);
  await expect.poll(async ()=>(await readAnimationTimesMs())[0]).toBeGreaterThanOrEqual(hiddenAnimationTimesMs[0]);
});

for (const colorScheme of ['light', 'dark'] as const) {
  for (const [width, height] of [[1440, 900], [1024, 768], [1280, 600], [1920, 900]]) {
    test(`overlapping cue contrast descends and rests: ${colorScheme} ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.emulateMedia({ colorScheme, reducedMotion: 'no-preference' });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      await page.goto('/');
      await page.evaluate(() => document.fonts.ready);
      const cue = page.locator('.scroll-cue');
      await expect.poll(() => cue.evaluate(node => node.getAnimations({ subtree: true }).length)).toBe(2);
      await expect(cue).toHaveAttribute('href', '#processo');
      await expect(cue).toHaveAttribute('aria-label', 'Conhecer nosso processo');
      expect(await cue.evaluate(node => node.tabIndex)).toBe(0);
      await expect(cue.locator('svg[aria-hidden="true"]')).toHaveCount(2);
      await cue.scrollIntoViewIfNeeded();
      const bounds = (await cue.boundingBox())!;
      const triangles = await cue.locator('path').evaluateAll(nodes => nodes.map(node => {
        const box = (node as SVGGraphicsElement).getBBox();
        return { x: box.x, y: box.y, width: box.width, height: box.height };
      }));
      expect(triangles).toEqual([
        { x: 0, y: 6, width: 24, height: 18 },
        { x: 0, y: 18, width: 24, height: 18 },
      ]);
      expect(triangles[0].y + triangles[0].height - triangles[1].y).toBe(6);
      expect((42 - (triangles[1].y + triangles[1].height - triangles[0].y)) / 2).toBe(6);
      const lightPeak = 'rgb(226, 226, 223)';
      const darkPeak = 'rgb(32, 32, 31)';
      const rest = colorScheme === 'light' ? 'rgb(97, 97, 93)' : 'rgb(158, 158, 162)';
      for (const [phase, time, activeTriangleIndex, peak] of [
        ['upper', 860, 0, lightPeak], ['lower', 1840, 1, darkPeak],
        ['rest', 2700, -1, rest],
        ['alternate-upper', 3660, 0, darkPeak], ['alternate-lower', 4640, 1, lightPeak],
        ['repeat-upper', 6460, 0, lightPeak], ['repeat-lower', 7440, 1, darkPeak],
      ] as const) {
        await cue.evaluate((node, time) => node.getAnimations({ subtree: true }).forEach(animation => {
          animation.pause();
          animation.currentTime = time;
        }), time);
        const fills = await cue.locator('path').evaluateAll(nodes => nodes.map(node => getComputedStyle(node).fill));
        if (activeTriangleIndex === -1) expect(fills).toEqual([rest, rest]);
        else {
          expect(fills[activeTriangleIndex]).toBe(peak);
          expect(fills[1 - activeTriangleIndex]).toBe(rest);
          // The upper tip lies inside the lower triangle. Hit testing that
          // shared ink proves the active triangle is painted above its sibling.
          const topmostTriangleIndex = await cue.evaluate(node => {
            const bounds = node.getBoundingClientRect();
            const hit = document.elementFromPoint(bounds.x + bounds.width / 2, bounds.y + 32);
            return Array.from(node.querySelectorAll('path')).indexOf(hit as SVGPathElement);
          });
          expect(topmostTriangleIndex).toBe(activeTriangleIndex);
        }
        expect(bounds.width).toBe(36);
        expect(bounds.height).toBe(63);
        expect(await cue.boundingBox()).toEqual(bounds);
        for (const path of await cue.locator('path').all()) await expect(path).toHaveCSS('transform', 'none');
        await page.screenshot({ path: `test-results/scroll-cue/${colorScheme}-${width}x${height}-${phase}.png` });
      }
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await expect.poll(() => cue.evaluate(node => node.getAnimations({ subtree: true }).length)).toBe(0);
      for (const path of await cue.locator('path').all()) await expect(path).toHaveCSS('fill', rest);
      const staticCue = await cue.screenshot();
      await cue.hover();
      expect((await cue.screenshot()).equals(staticCue)).toBe(true);
      await cue.click();
      expect(await page.evaluate(() => location.hash)).toBe('#processo');
      await expect(page.locator('#processo')).toBeInViewport();
      expect(errors).toEqual([]);
    });
  }
  test(`mobile cue remains hidden: ${colorScheme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme });
    for (const [width, height] of [[390, 844], [320, 740], [320, 600], [768, 600], [900, 600], [1023, 768]]) {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await expect(page.locator('.scroll-cue')).toBeHidden();
      expect(await page.locator('.scroll-cue').evaluate(node => node.getAnimations({ subtree: true }).length)).toBe(0);
      await page.screenshot({ path: `test-results/scroll-cue/${colorScheme}-${width}x${height}-mobile.png` });
    }
  });
}

test('experimental process section preserves content, navigation and responsive bounds', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'dark' });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);

  const processSection = page.locator('#processo');
  await expect(processSection).toBeVisible();
  await expect(processSection.getByRole('heading', { level: 2 })).toHaveText('Nós estruturamos sua presença digital.');
  await expect(processSection.locator('.process-lead')).toHaveText(
    'Conhecemos seu negócio, identificamos o que precisa mudar e propomos um projeto para conectar apresentação e operação.'
  );

  const steps = processSection.locator('ol.process-ledger > li.process-step');
  await expect(steps).toHaveCount(3);
  await expect(processSection.locator('#processo-01')).toBeVisible();
  await expect(processSection.locator('#processo-02')).toBeVisible();
  await expect(processSection.locator('#processo-03')).toBeVisible();
  await expect(steps.nth(0).getByRole('heading', { level: 3 })).toHaveText('Conhecemos seu negócio');
  await expect(steps.nth(1).getByRole('heading', { level: 3 })).toHaveText('Definimos as prioridades');
  await expect(steps.nth(2).getByRole('heading', { level: 3 })).toHaveText('Apresentamos o projeto');
  await expect(steps.nth(2)).toContainText('briefing validado');

  // Verify no AI-slop tags or primitive SVG diagrams inside steps
  await expect(processSection.locator('.process-step-tag')).toHaveCount(0);
  await expect(processSection.locator('.process-step-diagram')).toHaveCount(0);

  // Check usable bounds without prescribing column ratios or an axis shared with hero.
  for (const width of [768, 900, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const cell of await processSection.locator('.process-header-secondary, .process-step-body, .process-closing-action').all()) {
      const bounds = (await cell.boundingBox())!;
      expect(bounds.width).toBeGreaterThan(0);
      expect(bounds.x).toBeGreaterThanOrEqual(0);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(width + 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(steps.locator('.process-step-stage')).toHaveText([
    'ENTRADA', 'ENTENDIMENTO DO CENÁRIO', 'DIRECIONAMENTO E PROPOSTA',
  ]);
  await steps.first().hover();
  await expect(steps.first().locator('h3')).toHaveCSS('transform', 'none');
  await expect(steps.first().locator('.process-step-rule')).toHaveCSS('transform', 'none');

  const cta = processSection.locator('a.process-cta');
  await expect(cta).toHaveAttribute('href', '#entrada');
  await expect(processSection.locator('ol.process-ledger a.process-cta')).toHaveCount(0);
  const ledgerBox = (await processSection.locator('ol.process-ledger').boundingBox())!;
  const ctaBox = (await cta.boundingBox())!;
  expect(ctaBox.y).toBeGreaterThanOrEqual(ledgerBox.y + ledgerBox.height);

  await expect(processSection.locator('.process-step-index')).toHaveCount(0);
  const primary = processSection.locator('.process-header-primary');
  await expect(primary).toHaveCSS('position', 'sticky');
  const sectionTop = await processSection.evaluate(node => node.getBoundingClientRect().top + window.scrollY);
  await page.evaluate(y => window.scrollTo(0, y + 250), sectionTop);
  expect((await primary.boundingBox())!.y).toBeCloseTo(135, 0);
  // Explicit page theme takes precedence over a later OS preference change.
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(processSection).toHaveCSS('background-color', 'rgb(6, 7, 10)');
  await page.emulateMedia({ colorScheme: 'dark' });
  await processSection.screenshot({ path: 'test-results/process-desktop-dark.png' });

  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 });
    const matrixPanel = (await page.locator('.hero-matrix-panel').boundingBox())!;
    const processBounds = (await processSection.boundingBox())!;
    expect(processBounds.y).toBeGreaterThanOrEqual(matrixPanel.y + matrixPanel.height - 1);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
    const datum = (await steps.first().locator('.process-step-datum').boundingBox())!;
    const body = (await steps.first().locator('.process-step-body').boundingBox())!;
    expect(body.y).toBeGreaterThanOrEqual(datum.y + datum.height);
    expect((await cta.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  }
  await processSection.screenshot({ path: 'test-results/process-mobile-dark.png' });
});
