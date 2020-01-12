const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const mapSize = {
  x: 100,
  y: 100
}

const sizeTile = 32;

const urlTile = "https://i.imgur.com/fqG34pO.png";
const urlCharacter = "https://i.imgur.com/ucwvhlh.png";
const urlBanner = "https://i.imgur.com/NXIjxr8.png";
const urlTree = "https://i.imgur.com/wIK2b9P.png";

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = src;

    image.onload = () => {
      resolve(image);
    };
    image.onerror = reject;
  });
}

renderMap()

async function renderMap() {
  const imageTile = await loadImage(urlTile);
  const imageCharacter = await loadImage(urlCharacter);
  const imageBanner = await loadImage(urlBanner);
  const imageTree = await loadImage(urlTree);

  for (let y = 0; y <= mapSize.y; y++) {
    for (let x = 0; x <= mapSize.x; x++) {
      context.drawImage(imageTile, x * sizeTile, y * sizeTile);
    }
  }
  context.drawImage(imageCharacter, 310, 310);

  context.drawImage(imageBanner, 25, 275);
  context.drawImage(imageBanner, 450, 275);
  context.drawImage(imageBanner, 245, 50);
  context.drawImage(imageBanner, 245, 510);

  context.drawImage(imageTree, 20, 20);
  context.drawImage(imageTree, 20, 500);
  context.drawImage(imageTree, 500, 20);
  context.drawImage(imageTree, 500, 500);

  context.font = "18px Arial";
  context.fillStyle = "white";

  context.fillText('Ayúdame Tucu', 42, 310);
  context.fillText('eres mi', 70, 335);
  context.fillText('única esperanza', 35, 360);

  context.fillText("You", 305, 72);
  context.fillText("Don't", 300, 98);
  context.fillText("know", 300, 124);
  context.fillText('CSS', 304, 150);

  context.fillText('El gato', 295, 538);
  context.fillText('me trajo', 290, 560);
  context.fillText('una gallina', 280, 582);
  context.fillText('del vecino', 282, 604);

  context.fillText('El gato', 295, 538);
  context.fillText('me trajo', 290, 560);
  context.fillText('una gallina', 280, 582);
  context.fillText('del vecino', 282, 604);

  context.fillText('Frontend', 490, 310);
  context.fillText('Café', 505, 337);
  context.fillText('FTW', 505, 365);
}
