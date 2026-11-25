[![Competition](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![Rank](https://make.fun/badge/news-image-20261125/diablosan19/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![Reward](https://make.fun/badge/news-image-20261125/diablosan19/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

# THE WORLD TODAY — Wednesday, November 25, 2026

An entry for the make.fun bounty [news-image-20261125](https://make.fun/bounty/news-image-20261125):
one image that sums up the world's news of a single day, Wednesday,
November 25, 2026.

## What the page carries

Sixteen stories made the front page. The lead is the Strait of Hormuz, where
Iran's Revolutionary Guards said two oil tankers struck naval mines and
caught fire; the drawn panel shows a tanker burning between the strait's
shores. Around it, in brief:

- **Ukraine war** — Ukrainian drones hit the Syzran and Kuibyshev Rosneft
  refineries in Russia's Samara region; a Russian warship was sunk at
  Benghazi; Zelensky put Ukraine's 2027 aid need at €115 billion.
- **Huawei convicted** — a Brooklyn jury convicted Huawei on 10 of 12 counts,
  bank fraud and conspiracy to steal trade secrets among them, and acquitted
  it of racketeering.
- **Pacific treaty** — Australia and the Solomon Islands signed a treaty in
  Canberra barring foreign military bases in the Solomons.
- **Space** — China's Shenzhou-24 docked with the Tiangong station carrying
  Pakistan's first astronaut.
- **Gaza and Sudan** — an Israeli strike killed Hamas's interior security
  chief among seven dead; RSF drone strikes killed 19 civilians in Sudan.
- **Climate** — Pope Leo XIV deplored the COP31 talks' failure to agree.
- **Colombia** — security forces stormed a Cartagena supermarket and freed
  every hostage.
- **Sport** — the Court of Arbitration for Sport restored Senegal's 2025
  Africa Cup of Nations title.
- **Trade, tech and the rest** — new US tariffs readied on 16 economies,
  hackers using AI agents to break into a university server, Dell's record
  $54.9 billion quarter, Ábrego García's departure for Spain, and Poundland's
  collapse putting 11,000 jobs at risk.

The black strip at the foot of the page is the markets ticker: KOSPI −6.2%,
Samsung −9.9%, Nikkei −2.8%, the Dow's first close above 50,000 at
50,018.70, and Brent below $90, down over 20% in November.

## Layout notes

The page is set like a broadsheet that had to fit a square. The date is the
largest red object on the page on purpose: a reader — or a judge — should
know which day this is before reading a single headline. The lead story
takes the top fold with the day's only picture; every other story gets a
region kicker in red small caps, one bold headline, and at most two lines of
text carrying the figure that proves it happened that day — a count, a
percentage, a price. Stories are ordered by weight, not geography, so the
war in Ukraine and the Huawei verdict sit directly under the lead, and the
markets, which touched every region at once, run as a ticker along the
bottom instead of competing for a box.

## How it runs

`main.ts` copies the shipped `entry.png` to `/output/entry.png`, checking
the file's first bytes are a PNG or JPEG signature before it writes.
Nothing is fetched and nothing is generated at run time.
