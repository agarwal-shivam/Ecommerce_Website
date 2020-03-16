const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
        clientID: `675891008841-nsvb3qo9bh3s8a8mqf7p7a597vmsconc.apps.googleusercontent.com`,
        clientSecret: `9GGn9Vc57dw5Pbxmam5L-Xbh`,
        callbackURL: `http://localhost:8000/auth/google/callback`
    },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};