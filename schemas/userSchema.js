
const mongoose = require('mongoose'),
    reqString = { type: String, required: true },
    moment = require('moment'),
    now = new Date(),
    dateStringWithTime = moment(now).format('YYYY-MM-DD HH:MM:SS');

const userSchema = new mongoose.Schema({
    email: reqString,
    password: reqString,
    date: {
        type: String,
        default: dateStringWithTime
    },
    orders: []
})

module.exports = mongoose.model("User", userSchema)
