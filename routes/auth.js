const express = require('express'),
    router = express.Router(),
    validation = require('../middlewares/validation.js'),
    { ensureAuthenticated, forwardAuthenticated } = require('../middlewares/authenticate.js');

router.use(require('express-flash')());

//----------------------------------------REGISTER----------------------------------------//
router.post('/register', async (req, res) => {
    let errors = [];
    const { email, password } = req.body;

    if (!email || !password) {
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
router.post('/login', (req, res, next) => {
    User.findOne({ email: req.body.email }).then(user => {
        passport.authenticate('local', (err, user, info) => {
            if (err) throw err;
            if (!user) res.send([{ msg: info.message }]);
            else {
                req.logIn(user, (err) => {
                    if (err) throw err;
                    res.send([{ msg: "Successfully Authenticated", sucess: true }]);
                });
            }
        })(req, res, next);
    })
});

//----------------------------------------LOGOUT----------------------------------------//
router.get('/logout', ensureAuthenticated, (req, res) => {
    req.logout()
    res.redirect('/auth/login')
})

module.exports = router;
