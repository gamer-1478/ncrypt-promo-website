require('dotenv').config()

//modules
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    path = require('path'),
    session = require('express-session'),
    passport = require('passport'),
    cookieParser = require('cookie-parser'),
    passport_init = require('./utils/passportConfig.js'),
    mongoose = require('mongoose');

//routes
const auth = require('./routes/auth.js');

const app = express(),
    PORT = process.env.PORT || 3001;
passport_init(passport);

//app middleware
app.use(express.static('public'))
app.use('/', express.static('public'))
app.use(bodyParser())


//passport middleware
app.use(session({
    name: 'session',
    resave: true,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    sameSite: 'none',
    overwrite: true,
    secure: true,
    maxAge: 1000 * 60 * 60 * 24 * 7
}));

app.use(cookieParser(process.env.SESSION_SECRET));

//initializing passport
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: (origin, callback) => callback(null, true),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    withCredentials: true,
    credentials: true
}))


//connect mongodb
const dbUri = process.env.MONGO_URI
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("Connected to mongodb"))

app.use(express.static(path.join(__dirname, 'frontend/build')));

//main
app.use('/auth', auth)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
