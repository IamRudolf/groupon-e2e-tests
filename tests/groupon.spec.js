const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.groupon.com';

test.describe('Groupon Homepage - Starter QA Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);

    try {
      await page.locator('text=Select your location').waitFor({ timeout: 5000 });
      await page.locator('[aria-label="Close"]').click();
    } catch {
      // Select your location modal didn't appear — continue
    }
  });

  test('TC-01: Homepage loads with correct title and URL', async ({ page }) => {
    await expect(page).toHaveURL(/groupon\.com/);
    await expect(page).toHaveTitle(/Groupon/i);
  });

test('TC-02: Logo is visible', async ({ page }) => {
  const logo = page.locator('[aria-label="Home"][data-bhw="Logo"]');
  await expect(logo).toBeVisible();
});

  test('TC-03: Search bar is visible and accepts input', async ({ page }) => {
    const searchInput = page.locator('input[id="ls-search"]');

    await expect(searchInput).toBeVisible();
    await searchInput.fill('spa');
    await expect(searchInput).toHaveValue('spa');
  });

  test('TC-04: Searching for a keyword navigates to results page', async ({ page }) => {
    const searchInput = page.locator('input[id="ls-search"]');


    await searchInput.fill('restaurant');
    await searchInput.press('Enter');

    await expect(page).toHaveURL(/restaurant|search|deals/i);
    await expect(page.locator('h1, [data-testid*="result"]').first()).toBeVisible();
  });

test('TC-05: At least one deal card is displayed on the homepage', async ({ page }) => {
  const dealCard = page.locator('a[href*="/deals/"]').first();

  await expect(dealCard).toBeVisible({ timeout: 10000 });

  const dealCount = await page.locator('a[href*="/deals/"]').count();

  expect(dealCount).toBeGreaterThan(0);
  console.log(`Found ${dealCount} deal cards on the homepage.`);
  
});

});