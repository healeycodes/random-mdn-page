const main = document.querySelector('main');
const linkCon = document.querySelector('.page-link-con');
const textCon = document.querySelector('.page-text-con');
const pageImg = document.querySelector('.page-img');
const another = document.querySelector('.another');

// Grab/render new page snippet
function newPage () {
  another.classList.remove('wobble');
  void another.offsetWidth;
  another.classList.add('wobble');
  fetch('/rnd')
    .then(res => res.json())
    .then(json => {
    linkCon.innerHTML = json.link;
    textCon.innerHTML = json.text;
  });
}
newPage();
