const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('landing', { user: req.user })
});

module.exports = router;