require('dotenv').config()

//modules
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    session = require('cookie-session'),
    passport = require('passport'),
    passportInit = require('./utils/passportConfig.js'),
    flash = require('express-flash'),
    expressLayouts = require('express-ejs-layouts'),
    mongoose = require('mongoose');

//routes
const auth = require('./routes/auth.js');

const app = express(),
    PORT = process.env.PORT || 3001;

//app middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json({ limit: '50mb' }), express.urlencoded({ extended: true, limit: '1mb' }))
app.use(flash())
app.use(expressLayouts)
app.use('/', express.static('public'))

//passport middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
}))

passportInit(passport)

//connect mongodb
const dbUri = process.env.MONGO_URI
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("Connected to mongodb"))

//more passport
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'frontend/build')));

//main
app.use('/auth', auth)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
