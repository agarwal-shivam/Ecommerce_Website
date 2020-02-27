//Express server setup
var express = require('express');
var app = express();
var port = 8000;
var path = require('path');
var data = require('./public/data.js');
//router calling
const cartRoutes = require('./routes/cartRoutes.js');
const wishlistRoutes = require('./routes/wishlistRoutes.js');

app.use(cartRoutes);
app.use(wishlistRoutes);

//pug template setting
app.set('view engine', 'pug');
app.set('views', 'views');

//static folder declare
//app.use(express.static('images'));
app.use(express.static('public'));
app.use(express.static('views'));
//app.use()

//Object to store items in wishlist,cart
const homedata = { homedatakey: 'homedatavalue' };
let wishlistdata = { wishlistkey: 'wishlistvalue' };
let cartdata = { cartkey: 'cartvalue' };
//homepage routing setup
app.get('/partials/:name', (req, res) => {
    const name = req.params.name;
    console.log('GETTING PARTIAL', name);

    console.log(path.join(__dirname + '/public/html/' + name + '.html'));
    res.sendFile(path.join(__dirname + '/public/html/' + name + '.html'));

});
app.get('/api/home', (req, res) => {
    res.send(data);

})

// app.get('/api/all-data', (req, res) => {
//     res.send(data);
// });
// app.get('/api/:alldata', (req, res) => {
//     const dataPage = req.params.alldata;
//     console.log(dataPage);
//     if (dataPage == 'homedata') {
//         res.send(data);
//     }
//     if (dataPage == 'wishlistdata') {
//         res.send(wishlistdata);
//     }
//     if (dataPage == 'cartdata') {
//         res.send(cartdata);
//     }
//     //res.send({ homedata });
// });

//homepage routing setup
app.get('/', (req, res) => {
    console.log('home');
    res.render('index', { data });
    //res.sendFile('home.html');
});




//product page routing setup
app.get('/product/:productId', function (req, res) {
    var productId = req.params.productId;
    console.log(productId);
    res.render('product', data[productId]);
    //res.sendStatus(200);
});

//cart data routing setup
// app.get('/cart/:productId', (req, res) => {
//     console.log('cart' + req.params.productId);
//     var productId = req.params.productId;
//     cartdata[productId] = data[productId];
//     //console.log(req.body);
//     res.send(cartdata);
// });



app.get('/card', function (req, res) {
    console.log('card');
    // if (Object.keys(cartdata).length == 0) {
    //     res.render('emptycart', {});
    // }
    // else {
    //     res.render('cart', { cartdata })
    // }
    //res.sendFile('path.join(__dirname + ' / public / cart.html')');
    res.send('card.html');
});

//buy now page routing setup
app.get('/buy_now', function (req, res) {
    res.send('Redirecting to the payment gateway...');
});

//invalid URL
app.get('*', function (req, res) {
    res.sendStatus('Sorry, this is an invalid URL.');
});

//port listening
app.listen(port, () => console.log('Listening on port ' + port));
