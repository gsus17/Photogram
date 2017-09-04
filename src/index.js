// var page = require('page');
var page = require('page');

var main = document.getElementById('main-container');

page('/', function (ctx, next) {
  main.innerHTML = 'Home <a href="/signup">Signup</a>';
})

page('/signup', function (ctx, next) {
  main.innerHTML = 'Signup <a href="/">Home</a>';
})

page('/signin', function (ctx, next) {
  main.innerHTML = 'Signin <a href="/">Signin</a>';
})

page();