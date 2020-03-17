const express = require('express');
const router = express.Router();
let cartdata = {};
var data = require('../public/data.js');

//route to get cart data
router.get('/api/cart', (req, res) => {
    console.log('cartdata route reached');
    res.send(cartdata);
});

//route to post cart data
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

//route to delete cart data
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