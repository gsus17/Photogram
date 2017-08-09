// Importa las librerias.
var express = require('express');
var photogram = express();

// Indica el motor de vistas js.
photogram.set('view engine', 'pug')

// Permite el acceso a los archivos estaticos.
photogram.use(express.static('www'))

// Indica el folder donde se levanta la aplicacion mediante index.pug
photogram.set('views', 'www')

// Renderiza la app.
photogram.get('/', function (req, res) {
    // res.send('hola mundo!')
    res.render('index')
})

// Levanta el server en el puerto 3000.
photogram.listen(3000, function (err) {
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log('Server running in port:3000!')
})