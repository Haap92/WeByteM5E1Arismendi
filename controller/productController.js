// ESTO SERIA EL GESTOR DEL MODELO
const jsonDB = require('../model/jsonDatabase');
// Maneja todos los métodos para PRODUCTO, que lo pasa como parámetro
const productModel = jsonDB('products');

let productController = {
    // lista todos los productos
    listar: (req, res) => {
        console.log('entro listado de productos')
        const products = productModel.all();
        res.render('products', { products });
    },
// Función que muestra el formulario de Alta de Productos
create: (req, res) => {
    console.log('form para alta de producto')
    res.render('createProduct');
},
// Función que simula el almacenamiento, en este caso en array
store: (req, res) => {
    console.log('Entre a store')
    console.log(req.files);
    // Atrapo los contenido del formulario
    const product = req.body;
    // Verificar si viene un archivo, para nombrarlo  
    product.image = req.file ? req.file.filename : '';
    console.log(product.image)
    // Delego la responsabilidad al modelo para crear producto  
    console.log(product)
    // Cuidade sólo mando el cuerpo del FORM, el Id me lo asigna el Modelo  
    productModel.create(product);
    res.redirect('/')
},

    // Función que muestra el detalle del producto, cuando hacemos click en la foto
    show: (req, res) => {
        const product = productModel.find(req.params.id);
        console.log(product)
        if (product) {
            res.render('detailProduct', { product });
        } else {
            res.render('error404');
        }
    },
    // FUnción que muestra el formulario de edición
    edit: (req, res) => {
       // Delego al modelo que busque el producto     
       let product = productModel.find(req.params.id);

       console.log(product)
       if (product) {
           res.render('editProduct', { product });
       } else {
           res.render('error404');
       }
   },
    // Función que realiza cambios en el producto seleccionado
    update: (req, res) => {
        console.log("Entré al update")
        // Armo la estructura del registro auxiliar (product) 
        let  product = req.body;
      
        console.log(' soy la nueva: ' +req.body.image)
        console.log('soy la vieja '+ req.body.oldImage)
        product.id = req.params.id;
   
        product.image = req.file ? req.file.filename : req.body.oldImagen;     
          if (req.body.image===undefined) {
            product.image = product.oldImage
        }
        console.log('.......MOSTRA LA IMAGEN.......')
        console.log(product.image)
        console.log(product)  
        // Elimino de la estructura auxiliar, porque no existe en Json 
        delete product.oldImage;
        // Delego la responsabilidad al modelo que actualice
        productModel.update(product);
          
        res.redirect('../products')
    },

    // Función que elimina del Array visitados el producto seleccionado
    destroy: (req, res) => {
        console.log('entre destroy')
        productModel.delete(req.params.id);
    // Ahora se mostrará todo porque los productos los varga de un archivo       
        res.redirect('/')
    },
    cart: (req, res) => {
        res.render('products/cart');
    },

    search: (req, res) => {

        let dataABuscar = req.query
        res.sed(dataABuscar)
    }


}

module.exports = productController