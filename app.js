var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
    res.render('index')
})

app.get('/about', function(req,res){
    res.render('about')
})



app.listen(3000, function(){
    console.log('frontEnd Server is running')
})