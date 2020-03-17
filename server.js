//Express server setup
var express = require('express');
var app = express();
var port = 8000;
var path = require('path');
var data = require('./public/data.js');
require('dotenv').config();
//router calling
const cartRoutes = require('./routes/cartRoutes.js');
const wishlistRoutes = require('./routes/wishlistRoutes.js');

app.use(cartRoutes);
app.use(wishlistRoutes);

//OAUth
const passport = require('passport');
const auth = require('./auth.js'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');
auth(passport);//error
app.use(cookieSession({
    name: 'session',
    keys: ['123']
}));
app.use(cookieParser());
app.use(passport.initialize());
app.get('/', (req, res) => {

    if (req.session.token) {
        res.cookie('token', req.session.token);
        res.cookie('name', req.session.name)
        res.cookie('pic', req.session.pic)
        console.log('home session cookie set ');
        res.render('index', { data });
    } else {
        res.cookie('token', '')
        res.cookie('name', '')
        res.cookie('pic', '')
        console.log('home session cookie not set');
        res.render('index', { data });
    }
});
app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));
app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        //console.log(req);
        req.session.token = req.user.token;
        req.session.name = req.user.profile.displayName;
        req.session.pic = req.user.profile._raw;
        res.redirect('/');
    }
);
app.get('/logout', (req, res) => {
    req.logout();

    req.session = null;
    res.redirect('/');
});

//pug template setting
app.set('view engine', 'pug');
app.set('views', 'views');

//static folder declare
app.use(express.static('public'));
app.use(express.static('views'));

//Object to store items in wishlist,cart
//const homedata = { homedatakey: 'homedatavalue' };
//let wishlistdata = { wishlistkey: 'wishlistvalue' };
//let cartdata = { cartkey: 'cartvalue' };
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

//homepage routing setup
// app.get('/', (req, res) => {
//     console.log('home');
//     res.render('index', { data });
// });

//product page routing setup
app.get('/api/:productId', function (req, res) {
    var productId = req.params.productId;
    console.log(productId);
    res.send(data[productId]).status(200);
});

app.get('/card', function (req, res) {
    console.log('card');
    res.send('card.html');
});

//buy now page routing setup
app.get('/buy_now', function (req, res) {
    res.send('Redirecting to the payment gateway...');
});

app.get('/favicon.ico', (req, res) => res.sendStatus(204));

//invalid URL
app.get('*', function (req, res) {
    res.sendStatus('Sorry, this is an invalid URL.');
});

//port listening
app.listen(process.env.PORT, () => console.log('Listening on port ' + process.env.PORT));
