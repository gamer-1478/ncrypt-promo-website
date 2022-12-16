const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const User = require('./../schemas/userSchema.js');

module.exports = function passport_init(passport) {
    passport.use(
        new LocalStrategy({
            usernameField: 'email', 
            passwordField: 'password' }, (email, password, done) => {
            User.findOne({
                email: email
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: 'That email is not registered' });
                }

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Password incorrect' });
                    }
                });
            });
        })
    );

    passport.serializeUser(function (user, done) {
        console.log(user.id)
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        console.log(id, 'deseralise')
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};
