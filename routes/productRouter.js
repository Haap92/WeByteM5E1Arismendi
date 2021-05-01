const express = require('express');
const router = express.Router();

const controladorProducto = require('../controller/productController');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/img'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// link a listado de productos
router.get('/', controladorProducto.listar);
// Formulario de creación de productos (GET)
router.get('/create', controladorProducto.create);
// detalle de producto:id
router.get('/:id', controladorProducto.show);
// editar detalle
router.get('/:id/edit', controladorProducto.edit);
// Acción de edición (a donde se envía el formulario) (PUT)
router.put('/:id', upload.single('image'), controladorProducto.update);
// Acción de borrado (DELETE)
router.delete('/:id', controladorProducto.destroy);
// Acción de creación (a donde se envía el formulario) (POST)
router.post('/store', upload.single('image'), controladorProducto.store);

// El get de la Barra de Búsqueda
router.get('/search', controladorProducto.search)


/*router.get('/', (req, res) => {
    const listProducts = productController.leerTodos();
    res.render('productos', { listProducts });
});
router.get('/:id', (req, res) => {
    res.render('detalleProducto')
    //res.send("Detalle de producto "+ req.params.id)
});
router.get('/edits/:id', (req, res) => {
    res.send("Muestra el formulario para editar el producto")
});
router.put('/', (req, res) => {
    res.send("Modificar producto")
})
router.delete('/:id', (req, res) => {
    res.send("Borra producto")
})
router.get('/create', (req, res) => {
res.render('altaProducto')
})
router.post('/', (req, res) => {
    res.send("Trae datos del form de alta")
})
*/


module.exports = router;