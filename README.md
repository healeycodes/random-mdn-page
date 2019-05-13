[Random MDN page](https://random-mdn-page.glitch.me/)
=================

<br>

An Express app that serves up a card of a random MDN JavaScript page.

Uses the Bulma CSS framework, as well as Puppeteer for the initial scraping.

![](https://github.com/healeycodes/random-mdn-page/blob/master/rnd-mdn-preview.png "Image of a random MDN page card")

<br>

#### Routes

`/` - for the card.

`/rnd` - for the card JSON.

<br>

#### Maintenance

Scrape for new pages:

`node getNewPages.js`

<br>

#### Improvement ideas

- Move the scraping to a cron job
- Address the ~1/900 chance of getting the same page twice
  - Perhaps a client-side re-request?
<br>

Made by [@healeycodes](https://twitter.com/healeycodes)
-------------------

\ ゜o゜)ノ
