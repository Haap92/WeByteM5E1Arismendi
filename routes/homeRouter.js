const express = require('express');
const router = express.Router();
const controllerHome = require('../controller/homeController');

router.get('/', (req,res) => {
    //leo el array de products en el controlador homeController
    const products = controllerHome.readAll();
    //envio el array product a la vista para que la recorra EJS
    console.log('volvi del controlador');
    res.render('home', {products});
});

module.exports = router;