var porn = $('#porn-tile');
var about = $('#about-tile');
var camshow = $('#camshow-tile');

// array containing gifs for the porn tile
var pornGifs = new Array(
  'url("https://cl.phncdn.com/gif/12254441.gif")',
  'url("https://i.gyazo.com/6d7298df5d0719e24c58e0bc83f9e133.gif")'
);

// array containing gifs for the about tile
var aboutGifs = new Array(
  'url("../images/tenzin.jpg")',
  'url("../images/tenzinflash.png")'
)

// array containing gifs for the camshow tile
var camshowGifs = new Array(
  'url("../images/camshows.webp")',
  'url("../images/camshow1.webp")',
  'url("../images/camshow2.webp")',
  'url("../images/camshow3.webp")'
)

var current = 0;
var camshowCurrent = 0;

// function to change the images
function nextBackground() {
  current++;
  camshowCurrent++;
  current = current % pornGifs.length;
  current = current % aboutGifs.length;
  camshowCurrent = camshowCurrent % camshowGifs.length;
  porn.css('background-image', pornGifs[current]);
  about.css('background-image', aboutGifs[current]);
  camshow.css('background-image', camshowGifs[camshowCurrent]);
}

// how often to call the function that changes the images
setInterval(nextBackground, 7000);

porn.css('background-image', pornGifs[0]);
about.css('background-image', aboutGifs[0]);
camshow.css('background-image', camshowGifs[0]);