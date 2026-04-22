// spec: specs/mojo-pro-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '../../fixtures';

test.describe('Header & Global Controls', () => {

  test('4.1 All Clients Dropdown Opens', async ({ mojoproPage: page }) => {
    const allClientsBtn = page.getByRole('button', { name: /All Clients/i });
    await expect(allClientsBtn).toBeVisible();
    await allClientsBtn.click();
    await page.waitForTimeout(500);

    await expect(allClientsBtn).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
  });

  test('4.2 Region / Currency Selector Opens', async ({ mojoproPage: page }) => {
    const regionBtn = page.getByRole('button', { name: /All Regions/i });
    await expect(regionBtn).toBeVisible();
    await regionBtn.click();
    await page.waitForTimeout(500);

    await expect(regionBtn).toHaveAttribute('aria-expanded', 'true');
    await page.keyboard.press('Escape');
  });

  test('4.3 Page Title is Mojo', async ({ mojoproPage: page }) => {
    await expect(page).toHaveTitle('Mojo');
  });

});
