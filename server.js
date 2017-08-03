var express = require('express');
var photogram = express();

photogram.get('/', function (req,res){
    res.send('hola mundo!')
})

photogram.listen(3000, function(err){
    if(err) return console.log('Hubo un error'), process.exit(1);
    console.log('Server running!')
})