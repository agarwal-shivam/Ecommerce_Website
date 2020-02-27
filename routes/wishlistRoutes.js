const express = require('express');
const router = express.Router();
let wishlistdata = { wishlistkey: 'wishlistvalue' };
var data = require('../public/data.js');

// router.post()

// router.get('/wishlist', function (req, res) {

//     res.send(wishlist.html);
// });
//wishlist data routing setup
// router.get('/wishlist/:productId', (req, res) => {
//     var productId = req.params.productId;
//     wishlistdata[productId] = data[productId];
//     res.sendStatus(200);
// });

//testing route to get the wishlist data
router.get('/api/wishlist', (req, res) => {
    console.log("wishlistData route hit");
    // console.log('wishlist route reached');
    res.send(wishlistdata).status(200);
});

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

// router.put('api/wishlist/:id', (req, res) => {
//     console.log('wishlist route reached');
//     res.send(wishlistdata);
// });

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



//testing route to get the wishlist data
// router.post('/wishdata', (req, res) => {
//     console.log('wishlist route reached');
//     //res.send(wishlistdata);
//     res.send("post request");
// });

module.exports = router;