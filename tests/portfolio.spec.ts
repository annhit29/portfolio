import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('loads the portfolio and its assets without errors', async ({
  page,
  request,
}, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('response', (response) => {
    if (response.status() >= 400)
      errors.push(`${response.status()} ${response.url()}`);
  });
  await page.goto('./');
  await expect(page).toHaveTitle(/Wei-En Hsieh — Software Engineer/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Wei-En Hsieh',
  );
  await expect(page.locator('.project-entry')).toHaveCount(3);
  await expect(page.locator('.project-result').first()).toContainText(
    'Excludes LLM inference',
  );
  const pdfUrl = await page
    .getByRole('link', { name: 'Download résumé' })
    .getAttribute('href');
  const pdf = await request.get(new URL(pdfUrl!, page.url()).href);
  expect(pdf.ok()).toBe(true);
  expect(pdf.headers()['content-type']).toContain('application/pdf');
  expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-');
  const faviconUrl = await page
    .locator('link[rel="icon"]')
    .getAttribute('href');
  const favicon = await request.get(new URL(faviconUrl!, page.url()).href);
  expect(favicon.headers()['content-type']).toContain('image/svg+xml');
  const image = await request.get(
    new URL('social-preview.png', page.url()).href,
  );
  expect(image.headers()['content-type']).toContain('image/png');
  expect(
    await page
      .locator('body')
      .evaluate((element) => element.scrollWidth <= window.innerWidth),
  ).toBe(true);
  expect(errors).toEqual([]);
  await page.screenshot({
    path: testInfo.outputPath('portfolio-full.png'),
    fullPage: true,
  });
  await page.screenshot({
    path: testInfo.outputPath('portfolio-viewport.png'),
  });
});

test('supports navigation, keyboard details, and resume download', async ({
  page,
}) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Projects', exact: true })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  for (const notes of await page.locator('details').all()) {
    const summary = notes.locator('summary');
    await summary.focus();
    await page.keyboard.press('Enter');
    await expect(notes).toHaveAttribute('open', '');
    await expect(notes.locator('.engineering-notes')).toBeVisible();
    expect(
      await page
        .locator('body')
        .evaluate((element) => element.scrollWidth <= window.innerWidth),
    ).toBe(true);
    await page.keyboard.press('Enter');
    await expect(notes).not.toHaveAttribute('open', '');
  }
  const download = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Download résumé' }).click();
  expect((await download).suggestedFilename()).toBe('Wei-En-Hsieh-Resume.pdf');
});

test('has no serious accessibility issues in collapsed or expanded content', async ({
  page,
}) => {
  await page.goto('./');
  const collapsed = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(collapsed.violations).toEqual([]);
  for (const summary of await page.locator('summary').all())
    await summary.click();
  const expanded = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze();
  expect(expanded.violations).toEqual([]);
});

test('works at 320px and honors reduced motion', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  for (const summary of await page.locator('summary').all())
    await summary.click();
  expect(
    await page
      .locator('body')
      .evaluate((element) => element.scrollWidth <= window.innerWidth),
  ).toBe(true);
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
  await expect(
    page.getByRole('link', { name: 'ann20010929@gmail.com' }),
  ).toBeVisible();
});

test('publishes canonical metadata only when a deployment URL is configured', async ({
  page,
}) => {
  await page.goto('./');
  const canonical = page.locator('link[rel="canonical"]');
  if (process.env.SITE_URL) {
    const siteUrl = new URL(process.env.SITE_URL);
    if (!siteUrl.pathname.endsWith('/')) siteUrl.pathname += '/';
    await expect(canonical).toHaveAttribute('href', siteUrl.href);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      new URL('social-preview.png', siteUrl).href,
    );
  } else {
    await expect(canonical).toHaveCount(0);
    await expect(page.locator('meta[property="og:url"]')).toHaveCount(0);
  }
});
