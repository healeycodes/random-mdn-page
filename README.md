### [Random MDN page](https://random-mdn-page.glitch.me/)

I created this tiny project in order to write about my process to help beginner web devs!

(A Tiny Project, From Inception to Deployment)[https://healeycodes.github.io/javascript/webdev/glitch/tutorial/2019/05/12/tiny-project-to-completion.html]

<br>

An Express app that serves up a card of a random MDN JavaScript page.

Uses the Bulma CSS framework, as well as Puppeteer for the initial scraping.

[![](https://github.com/healeycodes/random-mdn-page/blob/master/rnd-mdn-preview.png "Image of a random MDN page card")](https://random-mdn-page.glitch.me/)

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
