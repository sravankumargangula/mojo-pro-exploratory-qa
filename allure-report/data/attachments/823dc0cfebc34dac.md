# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: navigation/header.spec.ts >> Header & Global Controls >> 4.2 Region / Currency Selector Opens
- Location: tests/navigation/header.spec.ts:18:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: /All Regions/i })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: /All Regions/i })

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
                  - generic [ref=e136]: $30
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
                  - generic [ref=e168]: "20"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.91% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "4"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 99.76% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $1.53
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_up
                    - generic [ref=e227]: 313.51% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $7.67
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_up
                    - generic [ref=e255]: 55.58% from previous month
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
              - generic [ref=e315]:
                - generic [ref=e316]: "01"
                - generic [ref=e317]: "02"
                - generic [ref=e318]: "03"
                - generic [ref=e319]: "04"
                - generic [ref=e320]: "05"
                - generic [ref=e321]: "06"
                - generic [ref=e322]: "07"
              - generic [ref=e323]:
                - generic [ref=e324]: $0
                - generic [ref=e325]: $6
                - generic [ref=e326]: $12
                - generic [ref=e327]: $18
              - generic [ref=e328]:
                - generic [ref=e329]: $0
                - generic [ref=e330]: $4
                - generic [ref=e331]: $8
                - generic [ref=e332]: $12
          - generic [ref=e334]:
            - generic [ref=e335]:
              - generic [ref=e336]:
                - generic [ref=e337]: Hiring funnel
                - img [ref=e338] [cursor=pointer]: settings
              - generic [ref=e342]:
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - generic [ref=e345]: Clicks
                    - generic [ref=e346]: "20"
                  - generic [ref=e347]:
                    - generic [ref=e348]: Apply Starts
                    - generic [ref=e349]: "0"
                    - generic [ref=e350]: 100% Drop
                  - generic [ref=e351]:
                    - generic [ref=e352]: Apply Finish
                    - generic [ref=e353]: "4"
                    - generic [ref=e354]: No Drop
                  - generic [ref=e355]:
                    - generic [ref=e356]: Hires
                    - generic [ref=e357]: "0"
                    - generic [ref=e358]: 100% Drop
                - img [ref=e362]
            - generic [ref=e385]:
              - generic [ref=e386]: Spend analysis
              - generic [ref=e389]:
                - generic [ref=e390]:
                  - generic [ref=e391]:
                    - img "Spend" [ref=e392]
                    - generic [ref=e393]: Spend
                  - generic [ref=e394]:
                    - img "Proj. spend" [ref=e395]
                    - generic [ref=e396]: Proj. spend
                  - generic [ref=e397]:
                    - img "Prev. month spend" [ref=e398]
                    - generic [ref=e399]: Prev. month spend
                - img [ref=e403]:
                  - generic [ref=e422]:
                    - generic [ref=e423]: "01"
                    - generic [ref=e424]: "03"
                    - generic [ref=e425]: "05"
                    - generic [ref=e426]: "07"
                    - generic [ref=e427]: "09"
                    - generic [ref=e428]: "11"
                    - generic [ref=e429]: "13"
                    - generic [ref=e430]: "15"
                    - generic [ref=e431]: "17"
                    - generic [ref=e432]: "19"
                    - generic [ref=e433]: "21"
                    - generic [ref=e434]: "23"
                    - generic [ref=e435]: "25"
                    - generic [ref=e436]: "27"
                    - generic [ref=e437]: "29"
                    - generic [ref=e438]: "31"
                  - generic [ref=e439]:
                    - generic [ref=e440]: $0
                    - generic [ref=e441]: $5K
                    - generic [ref=e442]: $10K
                    - generic [ref=e443]: $15K
          - generic [ref=e445]:
            - heading "Publisher statistics" [level=2] [ref=e446]
            - generic [ref=e447]:
              - generic [ref=e448]:
                - generic [ref=e449]: Publishers comparison on
                - button "Spend" [ref=e451] [cursor=pointer]:
                  - img [ref=e452]: arrow_drop_down
                  - generic [ref=e453]: Spend
              - generic [ref=e456]:
                - generic [ref=e463]:
                  - img "Spend $30.69" [ref=e464]
                  - generic [ref=e473]:
                    - generic [ref=e474]: Spend
                    - generic [ref=e475]: $30.69
                - img [ref=e482]:
                  - generic [ref=e492]:
                    - generic [ref=e494]:
                      - generic [ref=e495]: $30.54
                      - text: $30.54
                    - generic [ref=e497]:
                      - generic [ref=e498]: $0.15
                      - text: $0.15
                  - generic [ref=e499]:
                    - generic [ref=e500]: Joveo Pixel Test Feed
                    - generic [ref=e501]: S-BC-SLOTS
                  - generic [ref=e502]:
                    - generic [ref=e503]: $0
                    - generic [ref=e504]: $5
                    - generic [ref=e505]: $10
                    - generic [ref=e506]: $15
                    - generic [ref=e507]: $20
                    - generic [ref=e508]: $25
                    - generic [ref=e509]: $30
                    - generic [ref=e510]: $35
                    - generic [ref=e511]: $40
              - generic [ref=e513] [cursor=pointer]:
                - generic [ref=e514]: View Publishers
                - img [ref=e515]: arrow_forward
```

# Test source

```ts
  1  | // spec: specs/mojo-pro-test-plan.md
  2  | // seed: tests/seed.spec.ts
  3  | 
  4  | import { test, expect } from '../../fixtures';
  5  | 
  6  | test.describe('Header & Global Controls', () => {
  7  | 
  8  |   test('4.1 All Clients Dropdown Opens', async ({ mojoproPage: page }) => {
  9  |     const allClientsBtn = page.getByRole('button', { name: /All Clients/i });
  10 |     await expect(allClientsBtn).toBeVisible();
  11 |     await allClientsBtn.click();
  12 |     await page.waitForTimeout(500);
  13 | 
  14 |     await expect(allClientsBtn).toHaveAttribute('aria-expanded', 'true');
  15 |     await page.keyboard.press('Escape');
  16 |   });
  17 | 
  18 |   test('4.2 Region / Currency Selector Opens', async ({ mojoproPage: page }) => {
  19 |     const regionBtn = page.getByRole('button', { name: /All Regions/i });
> 20 |     await expect(regionBtn).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
  21 |     await regionBtn.click();
  22 |     await page.waitForTimeout(500);
  23 | 
  24 |     await expect(regionBtn).toHaveAttribute('aria-expanded', 'true');
  25 |     await page.keyboard.press('Escape');
  26 |   });
  27 | 
  28 |   test('4.3 Page Title is Mojo', async ({ mojoproPage: page }) => {
  29 |     await expect(page).toHaveTitle('Mojo');
  30 |   });
  31 | 
  32 | });
  33 | 
```