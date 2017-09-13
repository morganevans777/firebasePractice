var express = require('express');
var app = express();
var database = require('./firebase.js')

var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});

database.init();  


app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
    
app.get('/', function(req, res) {
    database.fetchData(function(data){
        console.log(data)
        res.render('home', {products: data});
    });  
    
})

app.get('/about', function(req, res) {
    res.render('about');
})

app.get('*', function(req, res) {
    res.status(404);
    res.render('404')
})

app.listen(3000);