import { test, expect } from '@playwright/test';

for (const colorScheme of ['light', 'dark'] as const) {
  test(`reviewed Process remains aligned, readable and stable on hover: ${colorScheme}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.emulateMedia({ colorScheme, reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    const first = page.locator('.process-step').first();
    const title = first.locator('h3');
    await expect(page.locator('.process-step-datum, .process-step-stage, .process-step-rule')).toHaveCount(0);
    const opening = await page.evaluate(() => {
      const top = (selector: string) => document.querySelector(selector)!.getBoundingClientRect().top;
      return Math.abs(top('.process-title') - top('.process-step-title'));
    });
    expect(opening).toBeLessThan(1);
    await first.scrollIntoViewIfNeeded();
    const titleBefore = await title.boundingBox();
    await first.hover();
    expect(await title.boundingBox()).toEqual(titleBefore);
    await expect(title).toHaveCSS('text-shadow', 'none');

    for (const selector of ['.hero-cta', '.process-cta']) {
      const cta = page.locator(selector);
      await cta.hover();
      await expect(cta).toHaveCSS('background-color', colorScheme === 'light' ? 'rgb(255, 72, 44)' : 'rgb(255, 255, 255)');
      await expect(cta).toHaveCSS('color', colorScheme === 'light' ? 'rgb(17, 17, 17)' : 'rgb(6, 7, 10)');
      await cta.focus();
      await expect(cta).toHaveCSS('outline-style', 'solid');
      await page.mouse.down();
      await expect(cta).not.toHaveCSS('transform', 'none');
      await page.mouse.up();
    }

    for (const [width, height] of [[1440, 1000], [1440, 900], [1024, 600], [1023, 768], [390, 844], [320, 740]]) {
      await page.setViewportSize({ width, height });
      for (const fontSize of [16, 24]) {
        await page.evaluate(size => { document.documentElement.style.fontSize = `${size}px`; }, fontSize);
        expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
        if (width >= 1024) {
          await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
          const heading = (await page.locator('.process-title').boundingBox())!;
          const row = (await first.boundingBox())!;
          expect(row.y + row.height).toBeGreaterThanOrEqual(heading.y + heading.height + 24);
        }

        for (const label of await page.locator('.process-step-body').all()) {
          const bounds = (await label.boundingBox())!;
          expect(bounds.x).toBeGreaterThanOrEqual(0);
          expect(bounds.x + bounds.width).toBeLessThanOrEqual(width);
          expect(await label.evaluate(n => n.scrollWidth <= n.clientWidth + 1)).toBe(true);
        }
      }
    }
    await page.evaluate(() => document.documentElement.style.removeProperty('font-size'));
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator('.process-closing').scrollIntoViewIfNeeded();
    const header = (await page.locator('.process-header-primary').boundingBox())!;
    const footer = (await page.locator('.process-closing').boundingBox())!;
    expect(header.y + header.height).toBeLessThanOrEqual(footer.y + 1);
  });
}
