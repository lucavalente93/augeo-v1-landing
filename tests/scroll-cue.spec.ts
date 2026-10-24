import { test, expect } from '@playwright/test';

const CUE_ELEMENTS = '.scroll-cue-seg, .scroll-cue-anchor';
const LAYER_COUNT = 10; // 6 + 3 segments and the anchor
const CYCLE_MS = 5000;
const STEP_MS = 220; // the orange light moves to the next layer every 220 ms
const ACCENT = 'rgb(255, 72, 44)';

test('orange light visits layers in order and becomes static with reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');

  const cue = page.locator('.scroll-cue');
  await expect(cue).toBeVisible();

  // Verify GSAP timeline initialization and continuous cycle
  const isTlRunning = () => cue.evaluate(n => {
    const tl = (n as any).__gsapTimeline;
    return Boolean(tl && !tl.paused() && tl.repeat() === -1 && Math.round(tl.duration()) === 5);
  });
  await expect.poll(isTlRunning).toBe(true);

  // Each segment has micro-scanlines (Option 3 CRT scanline aperture array)
  const scanlines = cue.locator('.scroll-cue-scanline');
  await expect(scanlines).toHaveCount(2 * 9 + 4); // 9 segments * 2 scanlines + 1 anchor * 4 scanlines = 22

  const before = await cue.boundingBox();

  // Test reduced motion transition
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect.poll(() => cue.evaluate(n => (n as any).__gsapTimeline === null)).toBe(true);

  const rest = await cue.locator(CUE_ELEMENTS).evaluateAll(nodes => nodes.map(n => [
    getComputedStyle(n).opacity,
    getComputedStyle(n).transform,
  ]));
  expect(rest).toEqual([...Array(6).fill(['0.45', 'none']), ...Array(3).fill(['0.7', 'none']), ['1', 'none']]);
  await expect(cue.locator('.scroll-cue-anchor')).toHaveCSS('color', ACCENT);

  // Hover produces no translation under reduced motion
  await cue.hover();
  await page.waitForTimeout(400);
  await expect(cue.locator('.scroll-cue-seg').first()).toHaveCSS('transform', 'none');
  expect(await cue.boundingBox()).toEqual(before);
});

test('offscreen and hidden-document suspension resumes elapsed animation time', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.addStyleTag({ content: 'body { padding-bottom: 200vh; }' });

  const cue = page.locator('.scroll-cue');
  const isRunning = () => cue.evaluate(n => {
    const tl = (n as any).__gsapTimeline;
    return Boolean(tl && !tl.paused());
  });
  await expect.poll(isRunning).toBe(true);

  // Scroll offscreen -> timeline pauses
  await page.evaluate(() => window.scrollTo(0, 1200));
  await expect.poll(isRunning).toBe(false);

  const readTimeSeconds = () => cue.evaluate(n => (n as any).__gsapTimeline?.time() ?? 0);
  const pausedTime = await readTimeSeconds();
  await page.waitForTimeout(100);
  expect(await readTimeSeconds()).toEqual(pausedTime);

  // Scroll back -> timeline resumes
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect.poll(isRunning).toBe(true);
  expect(await readTimeSeconds()).toBeGreaterThanOrEqual(pausedTime);

  // Document hidden -> timeline pauses
  await page.evaluate(() => {
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect.poll(isRunning).toBe(false);
  const hiddenTime = await readTimeSeconds();
  await page.waitForTimeout(100);
  expect(await readTimeSeconds()).toEqual(hiddenTime);

  // Document visible -> timeline resumes
  await page.evaluate(() => {
    Reflect.deleteProperty(document, 'hidden');
    document.dispatchEvent(new Event('visibilitychange'));
  });
  await expect.poll(isRunning).toBe(true);
  expect(await readTimeSeconds()).toBeGreaterThanOrEqual(hiddenTime);
});

for (const colorScheme of ['light', 'dark'] as const) {
  const foreground = colorScheme === 'dark' ? 'rgb(247, 247, 245)' : 'rgb(17, 17, 17)';
  for (const [width, height] of [[1440, 1000], [1440, 900], [1024, 600], [1920, 900]]) {
    test(`light travels the 6-3-1 scaffold and hover compresses it: ${colorScheme} ${width}x${height}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.emulateMedia({ colorScheme, reducedMotion: 'no-preference' });
      await page.goto('/');
      await page.evaluate(() => document.fonts.ready);

      const cue = page.getByRole('link', { name: 'Conhecer nosso processo' });
      await expect(cue).toHaveAttribute('href', '#processo');
      await expect(cue.locator('[aria-hidden="true"]')).toHaveCount(1);
      await expect(cue.locator('.scroll-cue-row')).toHaveCount(2);

      await cue.scrollIntoViewIfNeeded();
      const bounds = (await cue.boundingBox())!;
      expect([bounds.width, bounds.height]).toEqual([80, 63]);
      const centerX = bounds.x + bounds.width / 2;

      const boxes = () => cue.locator(CUE_ELEMENTS).evaluateAll(nodes => nodes.map(n => {
        const r = n.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width, height: r.height, cx: r.x + r.width / 2, cy: r.y + r.height / 2 };
      }));

      const rest = await boxes();
      const rows = await cue.locator('.scroll-cue-row').evaluateAll(nodes => nodes.map(n => {
        const r = n.getBoundingClientRect();
        return { x: r.x, y: r.y, width: r.width, height: r.height };
      }));
      expect(rows.map(r => [r.width, r.height])).toEqual([[78, 4], [36, 4]]);
      for (const row of rows) expect(row.x + row.width / 2).toBe(centerX);
      expect(rest.map(l => [l.width, l.height])).toEqual([...Array(9).fill([8, 4]), [8, 8]]);
      for (const layer of rest) {
        expect(Number.isInteger(layer.x - bounds.x)).toBe(true);
        expect(Number.isInteger(layer.y - bounds.y)).toBe(true);
      }
      const anchor = rest[9];
      expect(anchor.cx).toBe(centerX);
      expect(rows[1].y - (rows[0].y + rows[0].height)).toBe(14);
      expect(anchor.y - (rows[1].y + rows[1].height)).toBe(14);

      // Seek GSAP timeline to each layer's excitation point and verify the orange light travels in order
      const litAt = (timeMs: number) => cue.evaluate((n, timeMs) => {
        const tl = (n as any).__gsapTimeline;
        if (tl) {
          tl.pause();
          tl.time(timeMs / 1000);
        }
        return [...n.querySelectorAll('.scroll-cue-seg, .scroll-cue-anchor')].map(el => getComputedStyle(el).color);
      }, timeMs);

      for (let i = 0; i < LAYER_COUNT; i++) {
        const frame = await litAt(i * STEP_MS + 100);
        expect(frame[i]).toBe(ACCENT);
        expect(frame.filter((c, j) => j !== i && j < i - 1 && c === ACCENT)).toEqual([]);
        expect(await cue.boundingBox()).toEqual(bounds);
      }

      // 4600ms: idle period before the 5.0s cycle repeats
      const idle = await litAt(4600);
      expect(idle.every(c => c === foreground)).toBe(true);

      // Resume timeline
      await cue.evaluate(n => { (n as any).__gsapTimeline?.play(); });

      // Hover pulls every segment 35 % toward the anchor using Motion spring physics
      await cue.hover();
      const settledOnHover = async () => {
        const now = await boxes();
        return now.slice(0, 9).every((l, i) =>
          Math.abs((l.cx - rest[i].cx) - (anchor.cx - rest[i].cx) * 0.35) < 0.25 &&
          Math.abs((l.cy - rest[i].cy) - (anchor.cy - rest[i].cy) * 0.35) < 0.25
        );
      };
      await expect.poll(settledOnHover, { timeout: 3000 }).toBe(true);
      expect(await cue.boundingBox()).toEqual(bounds);

      // Mouse leave springs back to rest
      await page.mouse.move(0, 0);
      await expect.poll(async () => (await boxes()).map(l => [l.cx, l.cy]), { timeout: 3000 }).toEqual(rest.map(l => [l.cx, l.cy]));

      // Keyboard navigation
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await cue.focus();
      await expect(cue).toHaveCSS('outline-style', 'solid');
      await expect(cue).toHaveCSS('outline-color', ACCENT);
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
      await page.screenshot({ path: `test-results/scroll-cue/${colorScheme}-${width}x${height}-mobile.png` });
    }
  });
}

test('explicit theme class drives cue colors over the system preference', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'reduce' });
  await page.goto('/');

  const scanline = page.locator('.scroll-cue-seg .scroll-cue-scanline').first();
  await expect(scanline).toHaveCSS('background-color', 'rgb(17, 17, 17)');

  await page.evaluate(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  });
  await expect(scanline).toHaveCSS('background-color', 'rgb(247, 247, 245)');

  await page.emulateMedia({ colorScheme: 'dark', reducedMotion: 'reduce' });
  await page.evaluate(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  });
  await expect(scanline).toHaveCSS('background-color', 'rgb(17, 17, 17)');
});

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
