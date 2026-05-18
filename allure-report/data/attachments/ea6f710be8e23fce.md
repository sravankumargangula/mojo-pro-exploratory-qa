# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/menu.spec.ts >> Navigation Menu >> 3.2 Navigate to Performance Dashboard
- Location: tests/navigation/menu.spec.ts:36:7

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
                  - generic [ref=e136]: $106
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
                  - generic [ref=e168]: "41"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.82% from previous month
                - img [ref=e175]
            - generic [ref=e187]:
              - generic [ref=e189] [cursor=pointer]:
                - img [ref=e190]
                - generic [ref=e191]: Sp. Applies
                - img [ref=e192]: arrow_drop_down
              - generic [ref=e193]:
                - generic [ref=e194]:
                  - generic [ref=e195]: "5"
                  - generic [ref=e196]:
                    - img [ref=e197]: arrow_drop_down
                    - generic [ref=e198]: 99.70% from previous month
                - img [ref=e202]
            - generic [ref=e214]:
              - generic [ref=e216] [cursor=pointer]:
                - img [ref=e217]
                - generic [ref=e218]: CPC
                - img [ref=e219]: arrow_drop_down
              - generic [ref=e220]:
                - generic [ref=e221]:
                  - generic [ref=e222]: $2.60
                  - generic [ref=e223]:
                    - img [ref=e224]: arrow_drop_up
                    - generic [ref=e225]: 550% from previous month
                - img [ref=e229]
            - generic [ref=e241]:
              - generic [ref=e243] [cursor=pointer]:
                - img [ref=e244]
                - generic [ref=e245]: CPA
                - img [ref=e246]: arrow_drop_down
              - generic [ref=e247]:
                - generic [ref=e248]:
                  - generic [ref=e249]: $21.30
                  - generic [ref=e250]:
                    - img [ref=e251]: arrow_drop_up
                    - generic [ref=e252]: 297.39% from previous month
                - img [ref=e256]
          - generic [ref=e268]:
            - generic [ref=e269]:
              - generic [ref=e270]: Compare performance of
              - button "Spend vs CPA" [ref=e272] [cursor=pointer]:
                - img [ref=e273]: arrow_drop_down
                - generic [ref=e275]:
                  - generic [ref=e278]: Spend
                  - generic [ref=e279]: vs
                  - generic [ref=e282]: CPA
            - img [ref=e291]:
              - generic [ref=e300]: Spend
              - generic [ref=e302]: CPA
              - generic [ref=e318]:
                - generic [ref=e319]: "01"
                - generic [ref=e320]: "03"
                - generic [ref=e321]: "05"
                - generic [ref=e322]: "07"
                - generic [ref=e323]: "09"
                - generic [ref=e324]: "11"
                - generic [ref=e325]: "13"
                - generic [ref=e326]: "15"
                - generic [ref=e327]: "17"
              - generic [ref=e328]:
                - generic [ref=e329]: $0
                - generic [ref=e330]: $15
                - generic [ref=e331]: $30
                - generic [ref=e332]: $45
              - generic [ref=e333]:
                - generic [ref=e334]: $0
                - generic [ref=e335]: $4
                - generic [ref=e336]: $8
                - generic [ref=e337]: $12
          - generic [ref=e339]:
            - generic [ref=e340]:
              - generic [ref=e341]:
                - generic [ref=e342]: Hiring funnel
                - img [ref=e343] [cursor=pointer]: settings
              - generic [ref=e347]:
                - generic [ref=e348]:
                  - generic [ref=e349]:
                    - generic [ref=e350]: Clicks
                    - generic [ref=e351]: "41"
                  - generic [ref=e352]:
                    - generic [ref=e353]: Apply Starts
                    - generic [ref=e354]: "15"
                    - generic [ref=e355]: 63.41% Drop
                  - generic [ref=e356]:
                    - generic [ref=e357]: Apply Finish
                    - generic [ref=e358]: "5"
                    - generic [ref=e359]: 66.67% Drop
                  - generic [ref=e360]:
                    - generic [ref=e361]: Hires
                    - generic [ref=e362]: "0"
                    - generic [ref=e363]: 100% Drop
                - img [ref=e367]
            - generic [ref=e390]:
              - generic [ref=e391]: Spend analysis
              - generic [ref=e394]:
                - generic [ref=e395]:
                  - generic [ref=e396]:
                    - img "Spend" [ref=e397]
                    - generic [ref=e398]: Spend
                  - generic [ref=e399]:
                    - img "Proj. spend" [ref=e400]
                    - generic [ref=e401]: Proj. spend
                  - generic [ref=e402]:
                    - img "Prev. month spend" [ref=e403]
                    - generic [ref=e404]: Prev. month spend
                - img [ref=e408]:
                  - generic [ref=e427]:
                    - generic [ref=e428]: "01"
                    - generic [ref=e429]: "03"
                    - generic [ref=e430]: "05"
                    - generic [ref=e431]: "07"
                    - generic [ref=e432]: "09"
                    - generic [ref=e433]: "11"
                    - generic [ref=e434]: "13"
                    - generic [ref=e435]: "15"
                    - generic [ref=e436]: "17"
                    - generic [ref=e437]: "19"
                    - generic [ref=e438]: "21"
                    - generic [ref=e439]: "23"
                    - generic [ref=e440]: "25"
                    - generic [ref=e441]: "27"
                    - generic [ref=e442]: "29"
                    - generic [ref=e443]: "31"
                  - generic [ref=e444]:
                    - generic [ref=e445]: $0
                    - generic [ref=e446]: $5K
                    - generic [ref=e447]: $10K
                    - generic [ref=e448]: $15K
          - generic [ref=e450]:
            - heading "Publisher statistics" [level=2] [ref=e451]
            - generic [ref=e452]:
              - generic [ref=e453]:
                - generic [ref=e454]: Publishers comparison on
                - button "Spend" [ref=e456] [cursor=pointer]:
                  - img [ref=e457]: arrow_drop_down
                  - generic [ref=e458]: Spend
              - generic [ref=e461]:
                - generic [ref=e468]:
                  - img "Spend $106.52" [ref=e469]
                  - generic [ref=e478]:
                    - generic [ref=e479]: Spend
                    - generic [ref=e480]: $106.52
                - img [ref=e487]:
                  - generic [ref=e497]:
                    - generic [ref=e499]:
                      - generic [ref=e500]: $104.51
                      - text: $104.51
                    - generic [ref=e502]:
                      - generic [ref=e503]: $2.01
                      - text: $2.01
                  - generic [ref=e504]:
                    - generic [ref=e505]: Joveo Pixel Test Feed
                    - generic [ref=e506]: S-BC-SLOTS
                  - generic [ref=e507]:
                    - generic [ref=e508]: $0
                    - generic [ref=e509]: $20
                    - generic [ref=e510]: $40
                    - generic [ref=e511]: $60
                    - generic [ref=e512]: $80
                    - generic [ref=e513]: $100
                    - generic [ref=e514]: $120
                    - generic [ref=e515]: $140
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: View Publishers
                - img [ref=e519]: arrow_forward
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
> 37 |     await page.getByRole('button', { name: 'build' }).click();
     |                                                       ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
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