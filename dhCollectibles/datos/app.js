let Collectibles = require("./collectibles.js")
let importar = require("./collectibles.js")

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];
console.log("Listado de todas las figuras");
let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function() {
      this.figuras.forEach(figura => {
        console.log(("MARCA: "),figura.marca);
        console.log(("Nombre: "),figura.nombre);
        console.log(("Precio: "),figura.precio);
        console.log(("STOCK: "),figura.stock);
        console.log("          ")
      });
    },
    figuresByBrand: function(marca) {
      return this.figuras.filter(figura => figura.marca === marca);
    }
  };
  collectibles.listFigures();
  
  console.log('Figuras de la marca solicitada:');
  let figuraSolicitada  = collectibles.figuresByBrand('Star Wars');
  console.log(figuraSolicitada);