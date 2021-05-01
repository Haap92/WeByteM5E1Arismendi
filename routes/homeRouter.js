const express = require('express');

const router = express.Router();

const controladorHome = require('../controller/homeController');

router.get('/', controladorHome.listar);

router.post('/', (req, res) => {
    res.send("Trae datos del form de alta de usuario")
})

router.post('/products', (req, res) => {
    res.send("Trae datos del form de login de usuario")
})

module.exports = router;