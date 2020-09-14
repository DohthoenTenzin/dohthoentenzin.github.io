var header = $('#porn-tile');

var backgrounds = new Array(
    'url("https://cl.phncdn.com/gif/12254441.gif")'
  , 'url("../images/porn.webp")'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 6000);

header.css('background-image', backgrounds[0]);