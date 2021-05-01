const express = require ('express');
const app = express();
const puerto = process.env.PORT;
const path = require ('path');
const methodOverride = require('method-override');

const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter')


// para que encuentre las imagenes y css
app.use(express.static('public'));
// configuro EJS
app.set('view engine', 'ejs')

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride('_method'));

// llamo al ruteo
app.use('/', homeRouter);
app.use('/products', productRouter);
//app.use('/', userRouter);


// luego borrar 

app.get('/login', (req, res) =>
res.render('login')
);
app.get('/register', (req, res) =>
res.render('register')
);


/*app.use ((req, res, next) => {
    res.status(404).render('error404')
});*/

app.listen(puerto || 3030, function() {
    console.log("Servidor corriendo en el puerto 3030");
});