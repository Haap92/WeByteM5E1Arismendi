const express = require("express")
const app = express();
const path = require("path");
const puerto = process.env.PORT

app.use(express.static('./public'));

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
});
app.get('/register', (req, res) => {
    res.render('register')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/'))
});
app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});