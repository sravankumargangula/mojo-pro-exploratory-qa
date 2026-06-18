# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/menu.spec.ts >> Navigation Menu >> 3.5 Notifications Panel Opens on Click
- Location: tests/navigation/menu.spec.ts:67:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'notifications' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'notifications' })

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
                  - generic [ref=e136]: $5,416
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
                  - generic [ref=e168]: 1,136
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_up
                    - generic [ref=e171]: 2,043.40% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "327"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_up
                    - generic [ref=e199]: 2,872.73% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $4.77
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_down
                    - generic [ref=e227]: 20.50% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $16.56
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_down
                    - generic [ref=e255]: 42.74% from previous month
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
              - generic [ref=e322]:
                - generic [ref=e323]: "01"
                - generic [ref=e324]: "03"
                - generic [ref=e325]: "05"
                - generic [ref=e326]: "07"
                - generic [ref=e327]: "09"
                - generic [ref=e328]: "11"
                - generic [ref=e329]: "13"
                - generic [ref=e330]: "15"
                - generic [ref=e331]: "17"
              - generic [ref=e332]:
                - generic [ref=e333]: $0
                - generic [ref=e334]: $400
                - generic [ref=e335]: $800
                - generic [ref=e336]: $1,200
              - generic [ref=e337]:
                - generic [ref=e338]: $0
                - generic [ref=e339]: $20
                - generic [ref=e340]: $40
                - generic [ref=e341]: $60
          - generic [ref=e343]:
            - generic [ref=e344]:
              - generic [ref=e345]:
                - generic [ref=e346]: Hiring funnel
                - img [ref=e347] [cursor=pointer]: settings
              - generic [ref=e351]:
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - generic [ref=e354]: Clicks
                    - generic [ref=e355]: 1,136
                  - generic [ref=e356]:
                    - generic [ref=e357]: Apply Starts
                    - generic [ref=e358]: "700"
                    - generic [ref=e359]: 38.38% Drop
                  - generic [ref=e360]:
                    - generic [ref=e361]: Apply Finish
                    - generic [ref=e362]: "327"
                    - generic [ref=e363]: 53.29% Drop
                  - generic [ref=e364]:
                    - generic [ref=e365]: Hires
                    - generic [ref=e366]: "0"
                    - generic [ref=e367]: 100% Drop
                - img [ref=e371]
            - generic [ref=e394]:
              - generic [ref=e395]: Spend analysis
              - generic [ref=e398]:
                - generic [ref=e399]:
                  - generic [ref=e400]:
                    - img "Spend" [ref=e401]
                    - generic [ref=e402]: Spend
                  - generic [ref=e403]:
                    - img "Proj. spend" [ref=e404]
                    - generic [ref=e405]: Proj. spend
                  - generic [ref=e406]:
                    - img "Prev. month spend" [ref=e407]
                    - generic [ref=e408]: Prev. month spend
                - img [ref=e412]:
                  - generic [ref=e431]:
                    - generic [ref=e432]: "02"
                    - generic [ref=e433]: "04"
                    - generic [ref=e434]: "06"
                    - generic [ref=e435]: "08"
                    - generic [ref=e436]: "10"
                    - generic [ref=e437]: "12"
                    - generic [ref=e438]: "14"
                    - generic [ref=e439]: "16"
                    - generic [ref=e440]: "18"
                    - generic [ref=e441]: "20"
                    - generic [ref=e442]: "22"
                    - generic [ref=e443]: "24"
                    - generic [ref=e444]: "26"
                    - generic [ref=e445]: "28"
                    - generic [ref=e446]: "30"
                  - generic [ref=e447]:
                    - generic [ref=e448]: $0
                    - generic [ref=e449]: $5K
                    - generic [ref=e450]: $10K
                    - generic [ref=e451]: $15K
          - generic [ref=e453]:
            - heading "Publisher statistics" [level=2] [ref=e454]
            - generic [ref=e455]:
              - generic [ref=e456]:
                - generic [ref=e457]: Publishers comparison on
                - button "Spend" [ref=e459] [cursor=pointer]:
                  - img [ref=e460]: arrow_drop_down
                  - generic [ref=e461]: Spend
              - generic [ref=e464]:
                - generic [ref=e471]:
                  - img "Spend $5,416.16" [ref=e472]
                  - generic [ref=e486]:
                    - generic [ref=e487]: Spend
                    - generic [ref=e488]: $5,416.16
                - img [ref=e495]:
                  - generic [ref=e508]:
                    - generic [ref=e510]:
                      - generic [ref=e511]: $3,922.03
                      - text: $3,922.03
                    - generic [ref=e513]:
                      - generic [ref=e514]: $1,138.49
                      - text: $1,138.49
                    - generic [ref=e516]:
                      - generic [ref=e517]: $256.98
                      - text: $256.98
                    - generic [ref=e519]:
                      - generic [ref=e520]: $81.43
                      - text: $81.43
                    - generic [ref=e522]:
                      - generic [ref=e523]: $14.78
                      - text: $14.78
                    - generic [ref=e525]:
                      - generic [ref=e526]: $2.30
                      - text: $2.30
                    - generic [ref=e528]:
                      - generic [ref=e529]: $0.15
                      - text: $0.15
                  - generic [ref=e530]:
                    - generic [ref=e531]: S-BC-CPC
                    - generic [ref=e532]: S-BC-CPA-USD
                    - generic [ref=e533]: S-BC-CPC-EURO
                    - generic [ref=e534]: Sanity test pub
                    - generic [ref=e535]: JAX USD
                    - generic [ref=e536]: Joveo Pixel Test Feed
                    - generic [ref=e537]: S-BC-SLOTS
                  - generic [ref=e538]:
                    - generic [ref=e539]: $0
                    - generic [ref=e540]: $1K
                    - generic [ref=e541]: $2K
                    - generic [ref=e542]: $3K
                    - generic [ref=e543]: $4K
                    - generic [ref=e544]: $5K
              - generic [ref=e546] [cursor=pointer]:
                - generic [ref=e547]: View Publishers
                - img [ref=e548]: arrow_forward
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
  11 |     await expect(buildBtn).toBeVisible();
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
> 69 |     await expect(notifBtn).toBeVisible();
     |                            ^ Error: expect(locator).toBeVisible() failed
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