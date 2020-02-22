//Express server setup
var express = require('express');
var app = express();
var port = 8000;
var path = require('path');
const data = require('./public/data.js');

//pug template setting
app.set('view engine', 'pug');
app.set("views", 'views');

//static folder declare
app.use(express.static('images'));
app.use(express.static('public'));
app.use(express.static('views'));


//Object to store items in wishlist,cart
let wishlistdata = {};
let cartdata = {};

//homepage routing setup
app.get('/', (req, res) => {
    console.log('home');
    res.render('index', { data });
    //res.sendFile('home.html');
});

//wishlist data routing setup
app.get('/wishlist/:productId', (req, res) => {
    var productId = req.params.productId;
    wishlistdata[productId] = data[productId];
    res.sendStatus(200);
});

//wishlist page routing setup
app.get('/wishlist', function (req, res) {
    // if (Object.keys(wishlistdata).length == 0) {
    //     res.render('emptywishlist', {});
    // }
    // else {
    //     res.render('wishlist', { wishlistdata })
    // }
    res.send("wishlist.html");
});

//product page routing setup
app.get('/product/:productId', function (req, res) {
    var productId = req.params.productId;
    console.log(productId);
    res.render('product', data[productId]);
    //res.sendStatus(200);
});

//cart data routing setup
app.get('/cart/:productId', (req, res) => {
    console.log('cart' + req.params.productId);
    var productId = req.params.productId;
    cartdata[productId] = data[productId];
    //console.log(req.body);
    res.send(cartdata);
});

//cart page routing setup
app.get('/cart', function (req, res) {
    console.log('cart');
    // if (Object.keys(cartdata).length == 0) {
    //     res.render('emptycart', {});
    // }
    // else {
    //     res.render('cart', { cartdata })
    // }
    //res.sendFile('path.join(__dirname + ' / public / cart.html')');
    res.send("cart.html");
});

//buy now page routing setup
app.get('/buy_now', function (req, res) {
    res.send("Redirecting to the payment gateway...")
});

//invalid URL
app.get('*', function (req, res) {
    res.sendStatus('Sorry, this is an invalid URL.');
});

//port listening
app.listen(port, () => console.log("Listening on port " + port));
