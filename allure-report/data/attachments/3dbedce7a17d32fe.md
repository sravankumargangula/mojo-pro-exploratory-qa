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
                  - generic [ref=e136]: $78
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
                  - generic [ref=e168]: "33"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.85% from previous month
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
                  - generic [ref=e224]: $2.38
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_up
                    - generic [ref=e227]: 543.24% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $19.63
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_up
                    - generic [ref=e255]: 291.82% from previous month
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
              - generic [ref=e317]:
                - generic [ref=e318]: "01"
                - generic [ref=e319]: "02"
                - generic [ref=e320]: "03"
                - generic [ref=e321]: "04"
                - generic [ref=e322]: "05"
                - generic [ref=e323]: "06"
                - generic [ref=e324]: "07"
                - generic [ref=e325]: "08"
                - generic [ref=e326]: "09"
                - generic [ref=e327]: "10"
                - generic [ref=e328]: "11"
                - generic [ref=e329]: "12"
              - generic [ref=e330]:
                - generic [ref=e331]: $0
                - generic [ref=e332]: $15
                - generic [ref=e333]: $30
                - generic [ref=e334]: $45
              - generic [ref=e335]:
                - generic [ref=e336]: $0
                - generic [ref=e337]: $4
                - generic [ref=e338]: $8
                - generic [ref=e339]: $12
          - generic [ref=e341]:
            - generic [ref=e342]:
              - generic [ref=e343]:
                - generic [ref=e344]: Hiring funnel
                - img [ref=e345] [cursor=pointer]: settings
              - generic [ref=e349]:
                - generic [ref=e350]:
                  - generic [ref=e351]:
                    - generic [ref=e352]: Clicks
                    - generic [ref=e353]: "33"
                  - generic [ref=e354]:
                    - generic [ref=e355]: Apply Starts
                    - generic [ref=e356]: "9"
                    - generic [ref=e357]: 72.73% Drop
                  - generic [ref=e358]:
                    - generic [ref=e359]: Apply Finish
                    - generic [ref=e360]: "4"
                    - generic [ref=e361]: 55.56% Drop
                  - generic [ref=e362]:
                    - generic [ref=e363]: Hires
                    - generic [ref=e364]: "0"
                    - generic [ref=e365]: 100% Drop
                - img [ref=e369]
            - generic [ref=e392]:
              - generic [ref=e393]: Spend analysis
              - generic [ref=e396]:
                - generic [ref=e397]:
                  - generic [ref=e398]:
                    - img "Spend" [ref=e399]
                    - generic [ref=e400]: Spend
                  - generic [ref=e401]:
                    - img "Proj. spend" [ref=e402]
                    - generic [ref=e403]: Proj. spend
                  - generic [ref=e404]:
                    - img "Prev. month spend" [ref=e405]
                    - generic [ref=e406]: Prev. month spend
                - img [ref=e410]:
                  - generic [ref=e429]:
                    - generic [ref=e430]: "01"
                    - generic [ref=e431]: "03"
                    - generic [ref=e432]: "05"
                    - generic [ref=e433]: "07"
                    - generic [ref=e434]: "09"
                    - generic [ref=e435]: "11"
                    - generic [ref=e436]: "13"
                    - generic [ref=e437]: "15"
                    - generic [ref=e438]: "17"
                    - generic [ref=e439]: "19"
                    - generic [ref=e440]: "21"
                    - generic [ref=e441]: "23"
                    - generic [ref=e442]: "25"
                    - generic [ref=e443]: "27"
                    - generic [ref=e444]: "29"
                    - generic [ref=e445]: "31"
                  - generic [ref=e446]:
                    - generic [ref=e447]: $0
                    - generic [ref=e448]: $5K
                    - generic [ref=e449]: $10K
                    - generic [ref=e450]: $15K
          - generic [ref=e452]:
            - heading "Publisher statistics" [level=2] [ref=e453]
            - generic [ref=e454]:
              - generic [ref=e455]:
                - generic [ref=e456]: Publishers comparison on
                - button "Spend" [ref=e458] [cursor=pointer]:
                  - img [ref=e459]: arrow_drop_down
                  - generic [ref=e460]: Spend
              - generic [ref=e463]:
                - generic [ref=e470]:
                  - img "Spend $78.53" [ref=e471]
                  - generic [ref=e480]:
                    - generic [ref=e481]: Spend
                    - generic [ref=e482]: $78.53
                - img [ref=e489]:
                  - generic [ref=e499]:
                    - generic [ref=e501]:
                      - generic [ref=e502]: $78.17
                      - text: $78.17
                    - generic [ref=e504]:
                      - generic [ref=e505]: $0.36
                      - text: $0.36
                  - generic [ref=e506]:
                    - generic [ref=e507]: Joveo Pixel Test Feed
                    - generic [ref=e508]: S-BC-SLOTS
                  - generic [ref=e509]:
                    - generic [ref=e510]: $0
                    - generic [ref=e511]: $20
                    - generic [ref=e512]: $40
                    - generic [ref=e513]: $60
                    - generic [ref=e514]: $80
                    - generic [ref=e515]: $100
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