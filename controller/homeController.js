let visitados = require('../data/datosProductos');

let homeController = {
    readAll: function () {
        console.log('Leo productos desde data');
        return visitados
    }
}
module.exports = homeController