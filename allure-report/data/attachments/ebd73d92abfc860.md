# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/menu.spec.ts >> Navigation Menu >> 3.4 Navigate to User Management
- Location: tests/navigation/menu.spec.ts:57:7

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
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
                  - generic [ref=e136]: $1
                  - generic [ref=e137]:
                    - img [ref=e138]: arrow_drop_down
                    - generic [ref=e139]: Underpacing by 0%
                - img [ref=e143]
            - generic [ref=e156]:
              - generic [ref=e158] [cursor=pointer]:
                - img [ref=e159]
                - generic [ref=e160]: Sp. Clicks
                - img [ref=e161]: arrow_drop_down
              - generic [ref=e162]:
                - generic [ref=e163]:
                  - generic [ref=e164]: "2"
                  - generic [ref=e165]:
                    - img [ref=e166]: arrow_drop_up
                    - generic [ref=e167]: 100% from previous month
                - img [ref=e171]
            - generic [ref=e178]:
              - generic [ref=e180] [cursor=pointer]:
                - img [ref=e181]
                - generic [ref=e182]: Sp. Applies
                - img [ref=e183]: arrow_drop_down
              - generic [ref=e184]:
                - generic [ref=e185]:
                  - generic [ref=e186]: "0"
                  - generic [ref=e187]: NA
                - img [ref=e191]
            - generic [ref=e198]:
              - generic [ref=e200] [cursor=pointer]:
                - img [ref=e201]
                - generic [ref=e202]: CPC
                - img [ref=e203]: arrow_drop_down
              - generic [ref=e204]:
                - generic [ref=e205]:
                  - generic [ref=e206]: $0.58
                  - generic [ref=e207]: NA
                - img [ref=e211]
            - generic [ref=e218]:
              - generic [ref=e220] [cursor=pointer]:
                - img [ref=e221]
                - generic [ref=e222]: CPA
                - img [ref=e223]: arrow_drop_down
              - generic [ref=e224]:
                - generic [ref=e225]:
                  - generic [ref=e226]: $0
                  - generic [ref=e227]: NA
                - img [ref=e231]
          - generic [ref=e237]:
            - generic [ref=e238]:
              - generic [ref=e239]: Compare performance of
              - button "Spend vs CPA" [ref=e241] [cursor=pointer]:
                - img [ref=e242]: arrow_drop_down
                - generic [ref=e244]:
                  - generic [ref=e247]: Spend
                  - generic [ref=e248]: vs
                  - generic [ref=e251]: CPA
            - img [ref=e260]:
              - generic [ref=e268]: Spend
              - generic [ref=e270]: CPA
              - generic [ref=e277]: "01"
              - generic [ref=e278]:
                - generic [ref=e279]: $0
                - generic [ref=e280]: $0.50
                - generic [ref=e281]: $1
                - generic [ref=e282]: $1.50
              - generic [ref=e283]:
                - generic [ref=e284]: $0
                - generic [ref=e285]: $1
                - generic [ref=e286]: $2
                - generic [ref=e287]: $3
          - generic [ref=e289]:
            - generic [ref=e290]:
              - generic [ref=e291]:
                - generic [ref=e292]: Hiring funnel
                - img [ref=e293] [cursor=pointer]: settings
              - generic [ref=e297]:
                - generic [ref=e298]:
                  - generic [ref=e299]:
                    - generic [ref=e300]: Clicks
                    - generic [ref=e301]: "2"
                  - generic [ref=e302]:
                    - generic [ref=e303]: Apply Starts
                    - generic [ref=e304]: "1"
                    - generic [ref=e305]: 50% Drop
                  - generic [ref=e306]:
                    - generic [ref=e307]: Apply Finish
                    - generic [ref=e308]: "0"
                    - generic [ref=e309]: 100% Drop
                  - generic [ref=e310]:
                    - generic [ref=e311]: Hires
                    - generic [ref=e312]: "0"
                    - generic [ref=e313]: No Drop
                - img [ref=e317]
            - generic [ref=e340]:
              - generic [ref=e341]: Spend analysis
              - generic [ref=e344]:
                - generic [ref=e345]:
                  - generic [ref=e346]:
                    - img "Spend" [ref=e347]
                    - generic [ref=e348]: Spend
                  - generic [ref=e349]:
                    - img "Proj. spend" [ref=e350]
                    - generic [ref=e351]: Proj. spend
                  - generic [ref=e352]:
                    - img "Prev. month spend" [ref=e353]
                    - generic [ref=e354]: Prev. month spend
                - img [ref=e358]:
                  - generic [ref=e373]:
                    - generic [ref=e374]: "02"
                    - generic [ref=e375]: "04"
                    - generic [ref=e376]: "06"
                    - generic [ref=e377]: "08"
                    - generic [ref=e378]: "10"
                    - generic [ref=e379]: "12"
                    - generic [ref=e380]: "14"
                    - generic [ref=e381]: "16"
                    - generic [ref=e382]: "18"
                    - generic [ref=e383]: "20"
                    - generic [ref=e384]: "22"
                    - generic [ref=e385]: "24"
                    - generic [ref=e386]: "26"
                    - generic [ref=e387]: "28"
                    - generic [ref=e388]: "30"
                  - generic [ref=e389]:
                    - generic [ref=e390]: $0
                    - generic [ref=e391]: $250
                    - generic [ref=e392]: $500
                    - generic [ref=e393]: $750
                    - generic [ref=e394]: $1K
          - generic [ref=e396]:
            - heading "Publisher statistics" [level=2] [ref=e397]
            - generic [ref=e398]:
              - generic [ref=e399]:
                - generic [ref=e400]: Publishers comparison on
                - button "Spend" [ref=e402] [cursor=pointer]:
                  - img [ref=e403]: arrow_drop_down
                  - generic [ref=e404]: Spend
              - generic [ref=e407]:
                - generic [ref=e414]:
                  - img "Spend $1.15" [ref=e415]
                  - generic [ref=e423]:
                    - generic [ref=e424]: Spend
                    - generic [ref=e425]: $1.15
                - img [ref=e432]:
                  - generic [ref=e443]:
                    - generic [ref=e444]: $1.15
                    - text: $1.15
                  - generic [ref=e446]: Joveo Pixel Test Feed
                  - generic [ref=e447]:
                    - generic [ref=e448]: $0
                    - generic [ref=e449]: $1
                    - generic [ref=e450]: $0.25
                    - generic [ref=e451]: $0.50
                    - generic [ref=e452]: $0.75
                    - generic [ref=e453]: $1.25
                    - generic [ref=e454]: $1.50
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e457]: View Publishers
                - img [ref=e458]: arrow_forward
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
> 58 |     await page.getByRole('button', { name: 'build' }).click();
     |                                                       ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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