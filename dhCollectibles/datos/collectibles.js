
const figurasHotToys = require('./figuras1.json');
const figurasBandai = require('./figuras2.json');
const figurasStarWars = require('./figuras3.json');

function importar(marca) {
  switch (marca) {
    case 'Hot Toys':
      return figurasHotToys;
    case 'Bandai':
      return figurasBandai;
    case 'Star Wars':
      return figurasStarWars;
    default:
      console.log('');
      return ;
  }
}

console.log(importar('Hot Toys'));
module.exports = importar;