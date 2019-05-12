const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'] // Required for Glitch
    });
    const page = await browser.newPage();
    await page.goto('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Index');

    // Scan index table, gather links and summaries
    const pageEntries = await page.evaluate(() => {

        // Index table
        const indexTable = document.querySelector("#wikiArticle > table > tbody");

        // There are three <tr>s to a row
        const allRows = indexTable.querySelectorAll('tr');
        const chunkRows = [];
        for (var i = 0; i < allRows.length; i += 3) {
            chunkRows.push([allRows[i], allRows[i + 1], allRows[i + 2]]);
        }

        // Map these chunked rows into a row object
        const pageEntries = [];
        chunkRows.forEach(row => {
            const a = row[0].querySelector('a');
            const page = {
                link: `<a class="page-link "href="${a.href}">${a.innerText}</a>`,
                text: `<div class="page-text">${row[1].querySelector('td').innerText}</div>`
            }
            pageEntries.push(page);
        })
        return pageEntries;
    });

    // Save page objects to JSON on disk
    const pageJSON = JSON.stringify(pageEntries);
    fs.writeFile('./data/pages.json', pageJSON, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log(`New pages saved! (JSON length: ${pageJSON.length})`);
    });

    await browser.close();
})();
