var express = require('express');
var app = express();
var port = 5000;
var path = require('path');
const data = {
    "products": [
        {
            "name": "OPPO A7 (Glaze Blue, 3GB RAM, 64GB Storage)",
            "product_description": "A7 adopts the industry-first water drop screen design, backed by several technological advances, reflecting nature like a water droplet on the verge of dropping. Corning glass supports an 88.4 percent screen ratio, providing resistance to scratches",
            "sold_by": "Appario Retail Private Ltd",
            "price": "231",
            "warranty_details": "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
        },
        {
            "name": "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens, 16GB Card and Carry Case",
            "product_description": "All camera users, even beginners, will be able to capture amazing images and movies with this DSLR camera",
            "delivery_by": "Wed",
            "sold_by": "Appario Retail Private Ltd",
            "price": "231",
            "warranty_details": "1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
        }
    ]
};

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/product.html'));
});

app.get('/wishlist', (req, res) => {

    res.sendFile(path.join(__dirname + '/src/wishlist.html'));
})
app.get('/Description', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/description.html'));
})
app.get('/Description1', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/description1.html'));
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));