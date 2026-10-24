import { test, expect } from '@playwright/test';

for (const colorScheme of ['light', 'dark'] as const) {
  test(`theme button updates page, Process and static canvas without remounting: ${colorScheme}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme, reducedMotion: 'reduce' });
    await page.goto('/');
    const button = page.getByRole('button', { name: 'Alternar entre modo claro e escuro' });
    const canvas = page.locator('.hero-matrix canvas').first();
    const originalCanvas = await canvas.elementHandle();
    const readPixel = () => canvas.evaluate(node => Array.from((node as HTMLCanvasElement).getContext('2d')!.getImageData(2, 2, 1, 1).data));
    for (const theme of [colorScheme, colorScheme === 'dark' ? 'light' : 'dark', colorScheme]) {
      await expect(button).toHaveText(`[${theme.toUpperCase()}]`);
      await expect(page.locator('html')).toHaveClass(theme);
      await expect(page.locator('#processo')).toHaveCSS('background-color', theme === 'dark' ? 'rgb(6, 7, 10)' : 'rgb(247, 247, 245)');
      await expect.poll(readPixel).toEqual(theme === 'dark' ? [6, 7, 10, 255] : [247, 247, 245, 255]);
      expect(await canvas.evaluate((node, original) => node === original, originalCanvas)).toBe(true);
      await button.focus();
      await page.keyboard.press('Enter');
    }
  });
}

test('Process grid tracks actual container width, divider and responsive breakpoint', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: 'light' });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  // Force a narrower containing block to catch cqw falling back to viewport units.
  await page.addStyleTag({ content: 'body { width: calc(100% - 17px); } .page { position: relative; }' });
  for (const width of [320, 390, 768, 1023, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: 900 });
    const grid = await page.locator('.process-panel').evaluate(node => {
      const css = getComputedStyle(node);
      const rect = node.getBoundingClientRect();
      const ledger = node.querySelector('.process-ledger-wrapper')!.getBoundingClientRect();
      return { background: css.backgroundImage, width: rect.width, cell: parseFloat(css.backgroundSize), offset: parseFloat(css.backgroundPositionX), divider: ledger.x - rect.x };
    });
    expect(grid.cell).toBeCloseTo(grid.width * (width >= 1024 ? 0.14 : 1 / 3), 1);
    expect(grid.background).not.toContain('to bottom');
    if (width >= 1024) {
      expect(grid.offset + 1 + grid.cell * 3).toBeCloseTo(grid.divider, 1);
      expect(grid.cell * 4).toBeCloseTo(grid.width - grid.divider, 1);
      const boundaries = await page.locator('.process-step').evaluateAll(steps => steps.map(step => {
        const css = getComputedStyle(step, '::after');
        const row = step.getBoundingClientRect();
        return { width: parseFloat(css.width), right: css.right, bottom: css.bottom, border: css.borderBottomWidth, rowBottom: row.bottom };
      }));
      for (const boundary of boundaries) {
        expect(boundary.width).toBeCloseTo(grid.width, 1);
        expect(boundary.right).toBe('0px');
        expect(boundary.bottom).toBe('0px');
        expect(boundary.border).toBe('1px');
      }

    }
    const header = (await page.locator('.site-header').boundingBox())!;
    expect(header.width).toBeCloseTo(grid.width * (width >= 1024 ? 0.44 : 1), 1);
    await expect(page.locator('.scroll-cue'))[width >= 1024 ? 'toBeVisible' : 'toBeHidden']();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(width);
  }
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of ['light', 'dark']) {
      await page.evaluate(theme => { document.documentElement.className = theme; }, theme);
      await page.locator('#processo').screenshot({ path: `test-results/process-${width}-${theme}.png` });
    }
  }
});
