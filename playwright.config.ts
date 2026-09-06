import { defineConfig, devices } from '@playwright/test';

const sitePath = process.env.SITE_URL
  ? new URL(process.env.SITE_URL).pathname
  : '/';
const basePath = sitePath.endsWith('/') ? sitePath : `${sitePath}/`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  use: {
    baseURL: `http://127.0.0.1:4173${basePath}`,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : {},
  },
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: 'mobile',
      use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' },
    },
  ],
  webServer: {
    command: `npm run preview -- --port 4173 --strictPort --base ${basePath}`,
    url: `http://127.0.0.1:4173${basePath}`,
    reuseExistingServer: !process.env.CI,
  },
});
