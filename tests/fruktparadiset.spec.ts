import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:9292/');
});

test('has Fruktparadiset title', async ({ page }) => {
  await page.goto('http://localhost:9292/');

  await expect(page).toHaveTitle(/Fruktparadiset/);
});

test('Klicka på Banan, testa att todo: finns på sidan', async ({ page }) => {
  await page.getByRole('link', { name: 'Banan' }).click();

  await expect(page.getByText('Todo: Visa')).toBeVisible();
});

test('Lägg till ny frukt, testa så den finns i listan på förstasidan sedan ta bort den', async ({ page }) => {
  const uniqueString = crypto.randomUUID();

  await page.getByRole('link', { name: 'Ny frukt' }).click();

  await page.fill('input[name="fruit_name"]', uniqueString);

  await page.fill('input[name="fruit_description"]', "testfrukt");

  await page.click('input[type="submit"]');

  await expect(page.getByText(uniqueString)).toBeVisible();

  const fruitItem = page.locator(`li:has(a:text("${uniqueString}"))`);

  await fruitItem.locator('form.delete input[type="submit"]').click();

  await expect(page.getByText(uniqueString)).not.toBeAttached();
});

