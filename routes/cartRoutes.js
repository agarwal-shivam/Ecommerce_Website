const express = require('express');
const router = express.Router();
let cartdata = { cartkey: 'cartvalue' };
var data = require('../public/data.js');

// router.get('/cartdata', (req, res) => {
//     console.log('cart route reached');
//     res.send(cartdata);
// });

//cart data routing setup
// router.get('/cart/:productId', (req, res) => {
//     console.log('cart' + req.params.productId);
//     var productId = req.params.productId;
//     cartdata[productId] = data[productId];
//     //console.log(req.body);
//     res.send(cartdata);
// });

//cart page routing setup
// router.get('/cart', function (req, res) {
//     console.log('cart');
//     res.send('cart.html').status(200);
// });
//testing route to get the wishlist data
router.get('/api/cart', (req, res) => {
    console.log('cartdata route reached');
    res.send(cartdata);
});

router.post('/api/cart/:id', (req, res) => {

    let id = req.params.id;
    let present = id in cartdata;
    if (present) {
        res.sendStatus(409);
    }
    else {
        cartdata[id] = data[id];
        console.log('cart route reached');
        res.send(cartdata).status(201);
    }
});

// router.put('api/cart/:id', (req, res) => {
//     console.log('wishlist route reached');
//     res.send(wishlistdata);
// });

router.delete('/api/cart/:id', (req, res) => {
    let id = req.params.id;
    let present = id in cartdata;
    if (present) {
        delete cartdata[id];
        console.log('wishlist route reached');
        res.send(cartdata).status(200);
    }
    else {
        res.sendStatus(204);
    }
});




module.exports = router;