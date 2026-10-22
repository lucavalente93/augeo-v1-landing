import { test, expect } from '@playwright/test';

for (const colorScheme of ['light', 'dark'] as const) {
  test(`reviewed Process remains aligned, readable and stable on hover: ${colorScheme}`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.emulateMedia({ colorScheme, reducedMotion: 'reduce' });
    await page.goto('/');
    await page.evaluate(() => document.fonts.ready);
    const first = page.locator('.process-step').first();
    const title = first.locator('h3');
    const stage = first.locator('.process-step-stage');
    expect(await stage.evaluate(node => {
      const css = getComputedStyle(node);
      return { family: css.fontFamily, loaded: document.fonts.check('500 12px "IBM Plex Mono"', node.textContent!) };
    })).toEqual({ family: '"IBM Plex Mono", monospace', loaded: true });
    const opening = await page.evaluate(() => {
      const top = (selector: string) => document.querySelector(selector)!.getBoundingClientRect().top;
      return Math.abs(top('.process-title') - top('.process-step-title'));
    });
    expect(opening).toBeLessThan(1);
    await first.scrollIntoViewIfNeeded();
    const titleBefore = await title.boundingBox();
    const stageBefore = await stage.boundingBox();
    await first.hover();
    expect(await title.boundingBox()).toEqual(titleBefore);
    expect(await stage.boundingBox()).toEqual(stageBefore);
    await expect(title).toHaveCSS('text-shadow', 'none');
    await expect(stage).toHaveCSS('transform', 'none');
    expect(await first.locator('.process-step-datum').evaluate(n => getComputedStyle(n, '::before').transform)).toBe('none');
    await expect(first).toHaveCSS('box-shadow', 'rgb(255, 72, 44) 2px 0px 0px 0px inset');

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
        for (const label of await page.locator('.process-step-stage').all()) {
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
