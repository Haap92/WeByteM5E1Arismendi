// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');
// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

let homeController = {

    listar: (req, res) => {
       console.log('Soy Home Contoller - Leo el Json productos ')
        
        const products = productModel.readProducts();
        let inSale = [];
        let visited = [];

        // Con el siguiente código, se filtran los productos por state. Con límite de max 5 por categoría.

        products.forEach((element, i) => {
            if ( element.category === 'in-sale') {
                if ( inSale.length < 4 ) {
                    inSale.push(element);
                }
            } else if ( element.category === 'visited' ) {
                if ( visited.length < 4 ) {
                    visited.push(element);
                }
            }
        });

        return res.render('home', { inSale, visited })
    }
};

module.exports = homeController