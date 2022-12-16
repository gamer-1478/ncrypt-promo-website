const express = require('express'),
    router = express.Router(),
    User = require('../schemas/userSchema.js'),
    bcrypt = require('bcrypt'),
    passport = require('passport'),
    { ensureAuthenticated, forwardAuthenticated } = require('../middlewares/authenticate.js');

router.use(require('express-flash')());

//----------------------------------------REGISTER----------------------------------------//
router.post('/register', async (req, res) => {
    let errors = [];
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
        errors.push({ msg: "All fields are required" })
    };
    var existsUser = await User.findOne({ email: email });
    if (existsUser) {
        errors.push({ msg: "User already exists, try logging in instead." })
    }
    if (errors.length > 0) {
        return res.send(errors);
    }
    const newUser = new User({
        name: name,
        email: email,
        password: password,
    });
    bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => {
                passport.authenticate('local', (err, user, info) => {
                    if (err) throw err;
                    if (!user) return res.send([{ msg: info.message }]);
                    req.logIn(user, (err) => {
                        if (err) throw err;
                        return res.send([{ msg: "Successfully Authenticated", success: true }]);
                    });
                })(req, res);
            })
        })
    );
})

//----------------------------------------LOGIN----------------------------------------//
router.post('/login', (req, res) => {
    console.log(req.body)
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) return res.send([{ msg: info.message }]);
        req.login(user, (err) => {
            if (err) throw err;
            return res.send([{ msg: "Successfully Authenticated", success: true }]);
        });
    })(req, res);
});

router.get('/user', (req, res) => {
    if (req.isAuthenticated()) return res.send(req.user);
    else return res.send({ msg: "Not Authenticated", error: true});
})

//----------------------------------------LOGOUT----------------------------------------//
router.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout()
    res.redirect('/auth/login')
})

module.exports = router;
