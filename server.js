// init project
const express = require('express');
const app = express();
app.use(express.static('public'));


const pages = require('./data/pages.json');
const rndPage = () => pages[Math.floor(Math.random() * pages.length)];

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/rnd', (req, res) => res.send(rndPage()));

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
