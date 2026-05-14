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
                  - generic [ref=e136]: $98
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
                  - generic [ref=e168]: "39"
                  - generic [ref=e169]:
                    - img [ref=e170]: arrow_drop_down
                    - generic [ref=e171]: 99.83% from previous month
                - img [ref=e175]
            - generic [ref=e188]:
              - generic [ref=e190] [cursor=pointer]:
                - img [ref=e191]
                - generic [ref=e192]: Sp. Applies
                - img [ref=e193]: arrow_drop_down
              - generic [ref=e194]:
                - generic [ref=e195]:
                  - generic [ref=e196]: "5"
                  - generic [ref=e197]:
                    - img [ref=e198]: arrow_drop_down
                    - generic [ref=e199]: 99.70% from previous month
                - img [ref=e203]
            - generic [ref=e216]:
              - generic [ref=e218] [cursor=pointer]:
                - img [ref=e219]
                - generic [ref=e220]: CPC
                - img [ref=e221]: arrow_drop_down
              - generic [ref=e222]:
                - generic [ref=e223]:
                  - generic [ref=e224]: $2.54
                  - generic [ref=e225]:
                    - img [ref=e226]: arrow_drop_up
                    - generic [ref=e227]: 551.28% from previous month
                - img [ref=e231]
            - generic [ref=e244]:
              - generic [ref=e246] [cursor=pointer]:
                - img [ref=e247]
                - generic [ref=e248]: CPA
                - img [ref=e249]: arrow_drop_down
              - generic [ref=e250]:
                - generic [ref=e251]:
                  - generic [ref=e252]: $19.79
                  - generic [ref=e253]:
                    - img [ref=e254]: arrow_drop_up
                    - generic [ref=e255]: 274.81% from previous month
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
              - generic [ref=e319]:
                - generic [ref=e320]: "01"
                - generic [ref=e321]: "02"
                - generic [ref=e322]: "03"
                - generic [ref=e323]: "04"
                - generic [ref=e324]: "05"
                - generic [ref=e325]: "06"
                - generic [ref=e326]: "07"
                - generic [ref=e327]: "08"
                - generic [ref=e328]: "09"
                - generic [ref=e329]: "10"
                - generic [ref=e330]: "11"
                - generic [ref=e331]: "12"
                - generic [ref=e332]: "13"
                - generic [ref=e333]: "14"
              - generic [ref=e334]:
                - generic [ref=e335]: $0
                - generic [ref=e336]: $15
                - generic [ref=e337]: $30
                - generic [ref=e338]: $45
              - generic [ref=e339]:
                - generic [ref=e340]: $0
                - generic [ref=e341]: $4
                - generic [ref=e342]: $8
                - generic [ref=e343]: $12
          - generic [ref=e345]:
            - generic [ref=e346]:
              - generic [ref=e347]:
                - generic [ref=e348]: Hiring funnel
                - img [ref=e349] [cursor=pointer]: settings
              - generic [ref=e353]:
                - generic [ref=e354]:
                  - generic [ref=e355]:
                    - generic [ref=e356]: Clicks
                    - generic [ref=e357]: "39"
                  - generic [ref=e358]:
                    - generic [ref=e359]: Apply Starts
                    - generic [ref=e360]: "13"
                    - generic [ref=e361]: 66.67% Drop
                  - generic [ref=e362]:
                    - generic [ref=e363]: Apply Finish
                    - generic [ref=e364]: "5"
                    - generic [ref=e365]: 61.54% Drop
                  - generic [ref=e366]:
                    - generic [ref=e367]: Hires
                    - generic [ref=e368]: "0"
                    - generic [ref=e369]: 100% Drop
                - img [ref=e373]
            - generic [ref=e396]:
              - generic [ref=e397]: Spend analysis
              - generic [ref=e400]:
                - generic [ref=e401]:
                  - generic [ref=e402]:
                    - img "Spend" [ref=e403]
                    - generic [ref=e404]: Spend
                  - generic [ref=e405]:
                    - img "Proj. spend" [ref=e406]
                    - generic [ref=e407]: Proj. spend
                  - generic [ref=e408]:
                    - img "Prev. month spend" [ref=e409]
                    - generic [ref=e410]: Prev. month spend
                - img [ref=e414]:
                  - generic [ref=e433]:
                    - generic [ref=e434]: "01"
                    - generic [ref=e435]: "03"
                    - generic [ref=e436]: "05"
                    - generic [ref=e437]: "07"
                    - generic [ref=e438]: "09"
                    - generic [ref=e439]: "11"
                    - generic [ref=e440]: "13"
                    - generic [ref=e441]: "15"
                    - generic [ref=e442]: "17"
                    - generic [ref=e443]: "19"
                    - generic [ref=e444]: "21"
                    - generic [ref=e445]: "23"
                    - generic [ref=e446]: "25"
                    - generic [ref=e447]: "27"
                    - generic [ref=e448]: "29"
                    - generic [ref=e449]: "31"
                  - generic [ref=e450]:
                    - generic [ref=e451]: $0
                    - generic [ref=e452]: $5K
                    - generic [ref=e453]: $10K
                    - generic [ref=e454]: $15K
          - generic [ref=e456]:
            - heading "Publisher statistics" [level=2] [ref=e457]
            - generic [ref=e458]:
              - generic [ref=e459]:
                - generic [ref=e460]: Publishers comparison on
                - button "Spend" [ref=e462] [cursor=pointer]:
                  - img [ref=e463]: arrow_drop_down
                  - generic [ref=e464]: Spend
              - generic [ref=e467]:
                - generic [ref=e474]:
                  - img "Spend $98.93" [ref=e475]
                  - generic [ref=e484]:
                    - generic [ref=e485]: Spend
                    - generic [ref=e486]: $98.93
                - img [ref=e493]:
                  - generic [ref=e503]:
                    - generic [ref=e505]:
                      - generic [ref=e506]: $98.53
                      - text: $98.53
                    - generic [ref=e508]:
                      - generic [ref=e509]: $0.40
                      - text: $0.40
                  - generic [ref=e510]:
                    - generic [ref=e511]: Joveo Pixel Test Feed
                    - generic [ref=e512]: S-BC-SLOTS
                  - generic [ref=e513]:
                    - generic [ref=e514]: $0
                    - generic [ref=e515]: $20
                    - generic [ref=e516]: $40
                    - generic [ref=e517]: $60
                    - generic [ref=e518]: $80
                    - generic [ref=e519]: $100
                    - generic [ref=e520]: $120
              - generic [ref=e522] [cursor=pointer]:
                - generic [ref=e523]: View Publishers
                - img [ref=e524]: arrow_forward
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