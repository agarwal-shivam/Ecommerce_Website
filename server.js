var express = require('express');
var app = express();
var port = 5000;
var path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/product.html'));
});

app.get('/wishlist',(req,res)=>{
    res.sendfile('wishlist.html');
})
app.get('/Description',(req,res)=>{
    res.sendfile('description.html');
})
app.get('/Description1',(req,res)=>{
    res.sendfile('description1.html');
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`));