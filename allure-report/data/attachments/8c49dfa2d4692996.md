# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/menu.spec.ts >> Navigation Menu >> 3.1 Tools Menu Opens on Click with All Expected Items
- Location: tests/navigation/menu.spec.ts:8:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'build' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'build' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - img [ref=e6] [cursor=pointer]
    - generic [ref=e8]:
      - generic [ref=e9] [cursor=pointer]:
        - generic [ref=e10]: Account
        - generic [ref=e12]: Joveo-Test - $ USD
      - generic [ref=e14] [cursor=pointer]:
        - generic [ref=e15]: All Clients
        - img [ref=e16]: arrow_drop_down
    - generic [ref=e17]:
      - generic [ref=e21] [cursor=pointer]:
        - img [ref=e22]:
          - img [ref=e23]
        - text: All Regions
        - generic [ref=e25]: USD (P)
        - img [ref=e26]: arrow_drop_down
      - button [ref=e28] [cursor=pointer]:
        - img [ref=e29]: build
      - button [ref=e34] [cursor=pointer]:
        - img [ref=e35]: notifications
      - generic [ref=e39] [cursor=pointer]: JT
  - generic [ref=e40]:
    - generic [ref=e45]:
      - img [ref=e49] [cursor=pointer]:
        - img [ref=e50]
      - img [ref=e59] [cursor=pointer]:
        - img [ref=e60]
      - img [ref=e65] [cursor=pointer]:
        - img [ref=e66]
    - generic [ref=e77]:
      - generic [ref=e79]:
        - generic [ref=e80]:
          - generic [ref=e81]: Overview
          - generic [ref=e82]:
            - generic [ref=e83]:
              - generic [ref=e84]: Account
              - img [ref=e85]: keyboard_arrow_right
            - generic [ref=e87]: Joveo-Test - $ USD
        - button "Add Client" [ref=e89]:
          - img [ref=e90]: add
          - generic [ref=e91]: Add Client
      - generic [ref=e94]:
        - generic [ref=e95]:
          - generic [ref=e97]:
            - button:
              - img: filter_alt
            - generic [ref=e100] [cursor=pointer]: Add Filter
          - generic [ref=e101]:
            - button "Overall" [ref=e103] [cursor=pointer]:
              - generic [ref=e105]:
                - img [ref=e106]: bar_chart
                - generic [ref=e107]: Overall
              - img [ref=e108]: arrow_drop_down
            - button "This Month" [ref=e113] [cursor=pointer]:
              - generic [ref=e115]:
                - img [ref=e116]: date_range
                - generic [ref=e117]: This Month
              - img [ref=e118]: arrow_drop_down
        - generic [ref=e123]:
          - generic [ref=e125]:
            - generic [ref=e128]:
              - generic [ref=e130] [cursor=pointer]:
                - img [ref=e131]
                - generic [ref=e132]: Spend
                - img [ref=e133]: arrow_drop_down
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - generic [ref=e136]: $714
                  - generic [ref=e137]:
                    - img [ref=e138]: arrow_drop_down
                    - generic [ref=e139]: Underpacing by 0.00%
                - img [ref=e143]
            - generic [ref=e160]:
              - generic [ref=e162] [cursor=pointer]:
                - img [ref=e163]
                - generic [ref=e164]: Sp. Clicks
                - img [ref=e165]: arrow_drop_down
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - generic [ref=e168]: "120"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.47% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "16"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 99.05% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $5.96
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_up
                    - generic [ref=e227]: 1,286.05% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $44.68
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_up
                    - generic [ref=e255]: 677.04% from previous month
                - img [ref=e259]
          - generic [ref=e271]:
            - generic [ref=e272]:
              - generic [ref=e273]: Compare performance of
              - button "Spend vs CPA" [ref=e275] [cursor=pointer]:
                - img [ref=e276]: arrow_drop_down
                - generic [ref=e278]:
                  - generic [ref=e281]: Spend
                  - generic [ref=e282]: vs
                  - generic [ref=e285]: CPA
            - img [ref=e294]:
              - generic [ref=e303]: Spend
              - generic [ref=e305]: CPA
              - generic [ref=e330]:
                - generic [ref=e331]: "01"
                - generic [ref=e332]: "03"
                - generic [ref=e333]: "05"
                - generic [ref=e334]: "07"
                - generic [ref=e335]: "09"
                - generic [ref=e336]: "11"
                - generic [ref=e337]: "13"
                - generic [ref=e338]: "15"
                - generic [ref=e339]: "17"
                - generic [ref=e340]: "19"
                - generic [ref=e341]: "21"
                - generic [ref=e342]: "23"
                - generic [ref=e343]: "25"
                - generic [ref=e344]: "27"
                - generic [ref=e345]: "29"
              - generic [ref=e346]:
                - generic [ref=e347]: $0
                - generic [ref=e348]: $100
                - generic [ref=e349]: $200
                - generic [ref=e350]: $300
              - generic [ref=e351]:
                - generic [ref=e352]: $0
                - generic [ref=e353]: $100
                - generic [ref=e354]: $200
                - generic [ref=e355]: $300
          - generic [ref=e357]:
            - generic [ref=e358]:
              - generic [ref=e359]:
                - generic [ref=e360]: Hiring funnel
                - img [ref=e361] [cursor=pointer]: settings
              - generic [ref=e365]:
                - generic [ref=e366]:
                  - generic [ref=e367]:
                    - generic [ref=e368]: Clicks
                    - generic [ref=e369]: "120"
                  - generic [ref=e370]:
                    - generic [ref=e371]: Apply Starts
                    - generic [ref=e372]: "65"
                    - generic [ref=e373]: 45.83% Drop
                  - generic [ref=e374]:
                    - generic [ref=e375]: Apply Finish
                    - generic [ref=e376]: "16"
                    - generic [ref=e377]: 75.38% Drop
                  - generic [ref=e378]:
                    - generic [ref=e379]: Hires
                    - generic [ref=e380]: "0"
                    - generic [ref=e381]: 100% Drop
                - img [ref=e385]
            - generic [ref=e408]:
              - generic [ref=e409]: Spend analysis
              - generic [ref=e412]:
                - generic [ref=e413]:
                  - generic [ref=e414]:
                    - img "Spend" [ref=e415]
                    - generic [ref=e416]: Spend
                  - generic [ref=e417]:
                    - img "Proj. spend" [ref=e418]
                    - generic [ref=e419]: Proj. spend
                  - generic [ref=e420]:
                    - img "Prev. month spend" [ref=e421]
                    - generic [ref=e422]: Prev. month spend
                - img [ref=e426]:
                  - generic [ref=e445]:
                    - generic [ref=e446]: "01"
                    - generic [ref=e447]: "03"
                    - generic [ref=e448]: "05"
                    - generic [ref=e449]: "07"
                    - generic [ref=e450]: "09"
                    - generic [ref=e451]: "11"
                    - generic [ref=e452]: "13"
                    - generic [ref=e453]: "15"
                    - generic [ref=e454]: "17"
                    - generic [ref=e455]: "19"
                    - generic [ref=e456]: "21"
                    - generic [ref=e457]: "23"
                    - generic [ref=e458]: "25"
                    - generic [ref=e459]: "27"
                    - generic [ref=e460]: "29"
                    - generic [ref=e461]: "31"
                  - generic [ref=e462]:
                    - generic [ref=e463]: $0
                    - generic [ref=e464]: $5K
                    - generic [ref=e465]: $10K
                    - generic [ref=e466]: $15K
          - generic [ref=e468]:
            - heading "Publisher statistics" [level=2] [ref=e469]
            - generic [ref=e470]:
              - generic [ref=e471]:
                - generic [ref=e472]: Publishers comparison on
                - button "Spend" [ref=e474] [cursor=pointer]:
                  - img [ref=e475]: arrow_drop_down
                  - generic [ref=e476]: Spend
              - generic [ref=e479]:
                - generic [ref=e486]:
                  - img "Spend $714.94" [ref=e487]
                  - generic [ref=e500]:
                    - generic [ref=e501]: Spend
                    - generic [ref=e502]: $714.94
                - img [ref=e509]:
                  - generic [ref=e523]:
                    - generic [ref=e525]:
                      - generic [ref=e526]: $526.47
                      - text: $526.47
                    - generic [ref=e528]:
                      - generic [ref=e529]: $111.41
                      - text: $111.41
                    - generic [ref=e531]:
                      - generic [ref=e532]: $33.02
                      - text: $33.02
                    - generic [ref=e534]:
                      - generic [ref=e535]: $21.04
                      - text: $21.04
                    - generic [ref=e537]:
                      - generic [ref=e538]: $13
                      - text: $13
                    - generic [ref=e540]:
                      - generic [ref=e541]: $10
                      - text: $10
                  - generic [ref=e542]:
                    - generic [ref=e543]: Sanity test pub
                    - generic [ref=e544]: Joveo Pixel Test Feed
                    - generic [ref=e545]: S-BC-SLOTS
                    - generic [ref=e546]: S-BC-CPC-EURO
                    - generic [ref=e547]: Joveo Pixel Test Feed USD
                    - generic [ref=e548]: S-BC-CPC
                  - generic [ref=e549]:
                    - generic [ref=e550]: $0
                    - generic [ref=e551]: $100
                    - generic [ref=e552]: $200
                    - generic [ref=e553]: $300
                    - generic [ref=e554]: $400
                    - generic [ref=e555]: $500
                    - generic [ref=e556]: $600
                    - generic [ref=e557]: $700
              - generic [ref=e559] [cursor=pointer]:
                - generic [ref=e560]: View Publishers
                - img [ref=e561]: arrow_forward
```

# Test source

```ts
  1  | // spec: specs/mojo-pro-test-plan.md
  2  | // seed: tests/seed.spec.ts
  3  | 
  4  | import { test, expect } from '../../fixtures';
  5  | 
  6  | test.describe('Navigation Menu', () => {
  7  | 
  8  |   test('3.1 Tools Menu Opens on Click with All Expected Items', async ({ mojoproPage: page }) => {
  9  |     // Click the build/tools icon
  10 |     const buildBtn = page.getByRole('button', { name: 'build' });
> 11 |     await expect(buildBtn).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
  12 |     await buildBtn.click();
  13 |     await page.waitForTimeout(500);
  14 | 
  15 |     // Verify all expected menu items appear
  16 |     const expectedItems = [
  17 |       'Performance Dashboard',
  18 |       'Conversion Tracking',
  19 |       'Publisher Feeds',
  20 |       'Reports',
  21 |       'Tag Management',
  22 |       'Markups',
  23 |       'Publisher Management',
  24 |       'Scheduler Tasks',
  25 |       'User Management',
  26 |     ];
  27 |     for (const item of expectedItems) {
  28 |       await expect(page.getByRole('menuitem', { name: item })).toBeVisible();
  29 |     }
  30 | 
  31 |     // Escape closes the menu
  32 |     await page.keyboard.press('Escape');
  33 |     await expect(page.getByRole('menuitem', { name: 'Reports' })).not.toBeVisible();
  34 |   });
  35 | 
  36 |   test('3.2 Navigate to Performance Dashboard', async ({ mojoproPage: page }) => {
  37 |     await page.getByRole('button', { name: 'build' }).click();
  38 |     await page.waitForTimeout(300);
  39 | 
  40 |     await page.getByRole('menuitem', { name: 'Performance Dashboard' }).click();
  41 |     await page.waitForLoadState('domcontentloaded');
  42 | 
  43 |     // URL should reflect the new route
  44 |     await expect(page).toHaveURL(/performance|dashboard/i);
  45 |   });
  46 | 
  47 |   test('3.3 Navigate to Reports', async ({ mojoproPage: page }) => {
  48 |     await page.getByRole('button', { name: 'build' }).click();
  49 |     await page.waitForTimeout(300);
  50 | 
  51 |     await page.getByRole('menuitem', { name: 'Reports' }).click();
  52 |     await page.waitForLoadState('domcontentloaded');
  53 | 
  54 |     await expect(page).toHaveURL(/report/i);
  55 |   });
  56 | 
  57 |   test('3.4 Navigate to User Management', async ({ mojoproPage: page }) => {
  58 |     await page.getByRole('button', { name: 'build' }).click();
  59 |     await page.waitForTimeout(300);
  60 | 
  61 |     await page.getByRole('menuitem', { name: 'User Management' }).click();
  62 |     await page.waitForLoadState('domcontentloaded');
  63 | 
  64 |     await expect(page).toHaveURL(/user/i);
  65 |   });
  66 | 
  67 |   test('3.5 Notifications Panel Opens on Click', async ({ mojoproPage: page }) => {
  68 |     const notifBtn = page.getByRole('button', { name: 'notifications' });
  69 |     await expect(notifBtn).toBeVisible();
  70 |     await notifBtn.click();
  71 |     await page.waitForTimeout(500);
  72 | 
  73 |     // Panel/dropdown opens — button state changes
  74 |     await expect(notifBtn).toHaveAttribute('aria-expanded', 'true');
  75 |     await page.keyboard.press('Escape');
  76 |   });
  77 | 
  78 | });
  79 | 
```