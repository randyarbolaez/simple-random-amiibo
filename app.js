let amiiboCharacter = document.getElementById('amiibo-character');
let amiiboImage = document.getElementById('amiibo-image');
let amiiboGameSeries = document.getElementById('amiibo-gameSeries');
let title = document.querySelector('title');

fetch('https://www.amiiboapi.com/api/amiibo/')
  .then(res => res.json())
  .then(res => {
    let randomAmiibo =
      res.amiibo[Math.floor(Math.random() * res.amiibo.length)];
    ///////////////////
    title.innerHTML = `Amiibo | ${randomAmiibo.character} | ${
      randomAmiibo.gameSeries
    }`;

    amiiboCharacter.innerHTML = randomAmiibo.character;
    amiiboImage.innerHTML = `<img src="${randomAmiibo.image}" alt="${
      randomAmiibo.character
    }"/>`;
    amiiboGameSeries.innerHTML = randomAmiibo.gameSeries;
  });
