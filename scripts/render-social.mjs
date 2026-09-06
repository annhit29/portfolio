import { chromium } from '@playwright/test';
import { fileURLToPath } from 'node:url';

const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
    ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
    : {},
);
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });
  await page.goto(
    new URL('../public/social-preview.svg', import.meta.url).href,
  );
  await page.screenshot({
    path: fileURLToPath(
      new URL('../public/social-preview.png', import.meta.url),
    ),
  });
} finally {
  await browser.close();
}
