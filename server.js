var express = require('express');
var app = express();
var port = 8000;
var path = require('path');
const pug = require('pug');
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));


const data = {
    "product1":
    {
        "name": "OPPO A7 (Glaze Blue, 3GB RAM, 64GB Storage)",
        "product_description": "A7 adopts the industry-first water drop screen design, backed by several technological advances, reflecting nature like a water droplet on the verge of dropping. Corning glass supports an 88.4 percent screen ratio, providing resistance to scratches",
        "sold_by": "Appario Retail Private Ltd",
        "price": "100",
        "warranty_details": "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        "path": "/phone.jpg",
        "id": "product1"
    },
    "product2": {
        "name": "camera",
        "product_description": "All camera users, even beginners, will be able to capture amazing images and movies with this DSLR camera",
        "delivery_by": "Wed",
        "sold_by": "Appario Retail Private Ltd",
        "price": "200",
        "warranty_details": "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase",
        "path": "/camera.jpg",
        "id": "product22"
    }

};

app.use(express.static('public'));

app.get('/wishlist', (req, res) => {
    res.render('wishlist', {});
});

app.get('/product/:productId', function (request, response) {
    var productId = request.params.productId;

    return response.render('description', data[productId]);
});

app.get('/', (req, res) => {
    res.render('index', data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
