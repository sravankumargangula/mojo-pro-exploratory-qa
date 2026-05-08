# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth/login.spec.ts >> Authentication & Login >> 1.1 Successful Login with Valid Credentials
- Location: tests/auth/login.spec.ts:8:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://accounts.joveo.com/products"
Received: "https://accounts.joveo.com/login"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    9 × unexpected value "https://accounts.joveo.com/login"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - img "company logo" [ref=e8]
      - generic [ref=e9]:
        - heading "Not you?" [level=6] [ref=e10]
        - generic [ref=e11] [cursor=pointer]:
          - img [ref=e12]
          - heading "Log out" [level=6] [ref=e14]
    - generic [ref=e15]:
      - heading "Welcome Back! Joveo Test" [level=4] [ref=e16]
      - heading "Ready to switch gears in the world of recruitment marketing? Select the product to get started" [level=6] [ref=e17]
  - generic [ref=e20] [cursor=pointer]:
    - img [ref=e22]
    - generic [ref=e25]:
      - heading "MOJO Pro" [level=6] [ref=e26]
      - paragraph [ref=e27]: mojopro.joveo.com
      - paragraph [ref=e28]: Get your job ads in front of the right people – at the right place and time, for the right price.
```

# Test source

```ts
  1  | // spec: specs/mojo-pro-test-plan.md
  2  | // seed: tests/seed.spec.ts
  3  | 
  4  | import { test, expect } from '../../fixtures';
  5  | 
  6  | test.describe('Authentication & Login', () => {
  7  | 
  8  |   test('1.1 Successful Login with Valid Credentials', async ({ page }) => {
  9  |     // Step 1: Navigate to login page
  10 |     await page.goto('https://accounts.joveo.com/login');
  11 |     await expect(page).toHaveURL('https://accounts.joveo.com/login');
  12 | 
  13 |     // Step 2: Verify login page heading
  14 |     await expect(page.getByRole('heading', { name: 'Log in to Your Account' })).toBeVisible();
  15 | 
  16 |     // Step 3: Fill email
  17 |     await page.locator('input[type="email"], input[type="text"]').first().fill('joveotest@yopmail.com');
  18 | 
  19 |     // Step 4: Fill password
  20 |     await page.locator('input[type="password"]').fill('JoveoTest@321');
  21 | 
  22 |     // Step 5: Click Log In
  23 |     await page.getByRole('button', { name: 'Log In', exact: true }).click();
  24 | 
  25 |     // Verify product selection page
> 26 |     await expect(page).toHaveURL('https://accounts.joveo.com/products');
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  27 |     await expect(page.getByRole('heading', { name: /Welcome Back/i })).toBeVisible();
  28 |     await expect(page.getByRole('heading', { name: 'MOJO Pro' })).toBeVisible();
  29 |   });
  30 | 
  31 |   test('1.2 Login with Invalid Credentials', async ({ page }) => {
  32 |     // Step 1: Navigate to login page
  33 |     await page.goto('https://accounts.joveo.com/login');
  34 | 
  35 |     // Step 2: Enter invalid email
  36 |     await page.locator('input[type="email"], input[type="text"]').first().fill('invalid@test.com');
  37 | 
  38 |     // Step 3: Enter wrong password
  39 |     await page.locator('input[type="password"]').fill('WrongPassword123');
  40 | 
  41 |     // Step 4: Click Log In
  42 |     await page.getByRole('button', { name: 'Log In', exact: true }).click();
  43 |     await page.waitForTimeout(2000);
  44 | 
  45 |     // User should remain on login page — no redirect to /products
  46 |     await expect(page).not.toHaveURL(/products/);
  47 |   });
  48 | 
  49 |   test('1.3 Login with Empty Fields', async ({ page }) => {
  50 |     // Step 1: Navigate to login page
  51 |     await page.goto('https://accounts.joveo.com/login');
  52 | 
  53 |     // Step 2: Leave fields empty and submit
  54 |     await page.getByRole('button', { name: 'Log In', exact: true }).click();
  55 |     await page.waitForTimeout(1000);
  56 | 
  57 |     // User stays on login page
  58 |     await expect(page).toHaveURL('https://accounts.joveo.com/login');
  59 |   });
  60 | 
  61 |   test('1.4 Product Selection — Click MOJO Pro', async ({ authPage, page }) => {
  62 |     // Steps 1-2: Full login flow
  63 |     await authPage.login();
  64 | 
  65 |     // Verify products page
  66 |     await expect(page).toHaveURL('https://accounts.joveo.com/products');
  67 |     const mojoCard = page.getByRole('heading', { name: 'MOJO Pro' });
  68 |     await expect(mojoCard).toBeVisible();
  69 | 
  70 |     // Verify card has the correct sub-text
  71 |     await expect(page.getByText('mojopro.joveo.com')).toBeVisible();
  72 | 
  73 |     // Step 3: Click MOJO Pro — the app goes through a multi-step redirect chain
  74 |     // (mojopro.joveo.com → /validate → /overview) so we wait for the final URL
  75 |     await mojoCard.click();
  76 |     await page.waitForURL(/mojopro\.joveo\.com\/joveo-test\/overview/, { timeout: 30000 });
  77 | 
  78 |     // Verify MOJO Pro dashboard
  79 |     await expect(page).toHaveURL(/mojopro\.joveo\.com\/joveo-test\/overview/, { timeout: 10000 });
  80 |     await expect(page.getByRole('heading', { name: 'Publisher statistics' })).toBeVisible({ timeout: 10000 });
  81 |     await expect(page.getByRole('button', { name: 'Add Client' })).toBeVisible({ timeout: 10000 });
  82 |   });
  83 | 
  84 | });
  85 | 
```