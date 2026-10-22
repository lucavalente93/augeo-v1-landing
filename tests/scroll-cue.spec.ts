import { test, expect } from '@playwright/test';

test('cue pulse continues after introduction and becomes static with reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const cue = page.locator('.scroll-cue');
  const states = () => cue.evaluate(n => n.getAnimations({ subtree: true }).map(a => a.playState));
  await expect.poll(states).toEqual(['running']);
  const timing = await cue.evaluate(n => n.getAnimations({ subtree: true })[0].effect!.getTiming());
  expect([timing.duration, timing.delay, timing.iterations]).toEqual([2400, 0, Infinity]);
  const before = await cue.boundingBox();
  await cue.evaluate(n => n.getAnimations({ subtree: true })[0].currentTime = 3600);
  await expect.poll(states).toEqual(['running']);
  const transform = () => cue.locator('.scroll-cue-pulse').evaluate(n => getComputedStyle(n).transform);
  const ongoing = await transform();
  await expect.poll(transform).not.toEqual(ongoing);
  expect(await cue.boundingBox()).toEqual(before);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(states).toEqual([]);
  await expect(cue.locator('.scroll-cue-pulse')).toHaveCSS('transform', 'matrix(1, 0, 0, 1, 0, 16)');
});

test('offscreen and hidden-document suspension resumes elapsed animation time', async ({ page }) => {
  await page.setViewportSize({width:1440,height:900});
  await page.goto('/');
  await page.addStyleTag({content:'body {padding-bottom:200vh;}'});
  const cue=page.locator('.scroll-cue');
  const readAnimationStates=()=>cue.evaluate(n=>n.getAnimations({subtree:true}).map(a=>a.playState));
  await expect.poll(readAnimationStates).toEqual(['running']);
  await page.evaluate(()=>window.scrollTo(0,1200));
  await expect.poll(readAnimationStates).toEqual(['paused']);
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
  await expect.poll(readAnimationStates).toEqual(['running']);
  expect((await readAnimationTimesMs())[0]).toBeGreaterThanOrEqual(pausedAnimationTimesMs[0] - 0.1);
  // Test the visibility handler deterministically; real OS tab switching is a
  // separate manual verification, not implied by this synthetic state.
  await page.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});
  await expect.poll(readAnimationStates).toEqual(['paused']);
  const hiddenAnimationTimesMs=await readAnimationTimesMs(); await page.waitForTimeout(150); expect(await readAnimationTimesMs()).toEqual(hiddenAnimationTimesMs);
  await page.evaluate(()=>{Reflect.deleteProperty(document,'hidden');document.dispatchEvent(new Event('visibilitychange'));});
  await expect.poll(readAnimationStates).toEqual(['running']);
  await expect.poll(async ()=>(await readAnimationTimesMs())[0]).toBeGreaterThanOrEqual(hiddenAnimationTimesMs[0]);
});

for (const colorScheme of ['light', 'dark'] as const) {
  for (const [width, height] of [[1440, 1000], [1440, 900], [1024, 600], [1920, 900]]) {
    test(`rail pulse descends without moving the link: ${colorScheme} ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.emulateMedia({ colorScheme, reducedMotion: 'no-preference' });
      await page.goto('/');
      await page.evaluate(() => document.fonts.ready);
      const cue = page.getByRole('link', { name: 'Conhecer nosso processo' });
      await expect(cue).toHaveAttribute('href', '#processo');
      await expect(cue.locator('[aria-hidden="true"]')).toHaveCount(2);
      await expect.poll(() => cue.evaluate(n => n.getAnimations({ subtree: true }).length)).toBe(1);
      await cue.scrollIntoViewIfNeeded();
      const bounds = (await cue.boundingBox())!;
      expect([bounds.width, bounds.height]).toEqual([36, 63]);
      const rail = (await cue.locator('.scroll-cue-rail').boundingBox())!;
      const node = (await cue.locator('.scroll-cue-node').boundingBox())!;
      expect([rail.width, rail.height, node.width, node.height]).toEqual([1, 52, 5, 5]);
      expect(node.y - (rail.y + rail.height)).toBe(4);
      const positions: number[] = [];
      for (const time of [0, 840, 1680, 2400]) {
        await cue.evaluate((n, time) => n.getAnimations({ subtree: true }).forEach(a => { a.pause(); a.currentTime = time; }), time);
        positions.push(await cue.locator('.scroll-cue-pulse').evaluate(n => new DOMMatrix(getComputedStyle(n).transform).m42));
        expect(await cue.boundingBox()).toEqual(bounds);
      }
      expect(positions[0]).toBe(-20);
      expect(positions[1]).toBeGreaterThan(positions[0]);
      expect(positions[2]).toBe(52);
      expect(positions[3]).toBe(-20);
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await cue.focus();
      await expect(cue).toHaveCSS('outline-style', 'solid');
      await page.keyboard.press('Enter');
      expect(await page.evaluate(() => location.hash)).toBe('#processo');
      await expect(page.locator('#processo')).toBeInViewport();
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
  await expect(processSection.locator('.process-lead')).toHaveCount(0);

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
    for (const cell of await processSection.locator('.process-step-body, .process-closing-action').all()) {
      const bounds = (await cell.boundingBox())!;
      expect(bounds.width).toBeGreaterThan(0);
      expect(bounds.x).toBeGreaterThanOrEqual(0);
      expect(bounds.x + bounds.width).toBeLessThanOrEqual(width + 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
  }
  await page.setViewportSize({ width: 1440, height: 900 });
  await expect(steps.locator('.process-step-datum, .process-step-stage, .process-step-rule')).toHaveCount(0);
  await steps.first().hover();
  await expect(steps.first().locator('h3')).toHaveCSS('transform', 'none');

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
    expect((await cta.boundingBox())!.height).toBeGreaterThanOrEqual(44);
  }
  await processSection.screenshot({ path: 'test-results/process-mobile-dark.png' });
});
