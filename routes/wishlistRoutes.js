const express = require('express');
const router = express.Router();
let wishlistdata = {};
var data = require('../public/data.js');


// route to get the wishlist data
router.get('/api/wishlist', (req, res) => {
    console.log("wishlistData route hit");
    res.send(wishlistdata).status(200);
});

//route to post the wishlist data
router.post('/api/wishlist/:id', (req, res) => {

    let id = req.params.id;
    let present = id in wishlistdata;
    if (present) {
        res.sendStatus(409);
    }
    else {
        wishlistdata[id] = data[id];
        console.log('wishlist route reached');
        res.send(wishlistdata).status(201);
    }
});

//route to delete wishlist data
router.delete('/api/wishlist/:id', (req, res) => {
    let id = req.params.id;
    let present = id in wishlistdata;
    if (present) {
        delete wishlistdata[id];
        console.log('wishlist route reached');
        res.send(wishlistdata).status(200);
    }
    else {
        res.sendStatus(204);
    }
});
module.exports = router;