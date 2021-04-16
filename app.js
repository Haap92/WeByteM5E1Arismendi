const express = require("express")
const app = express();
const path = require("path");
const puerto = process.env.PORT;
//Gerentes de Ruteo
const homeRouter = require('./routes/homeRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');

app.use(express.static('./public'));
//Motor Ejs
app.set('view engine', 'ejs')
//Llamar al ruteo
app.use('/', homeRouter);
//app.use('/', userRouter);
//app.use('/products', productRouter);

//Levantar Servidor
app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});