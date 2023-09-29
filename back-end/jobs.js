const mongoose = require('mongoose');

let JobSchema = mongoose.Schema({
    category: String,
    field: String,
    salary: String,
    location: String,
    level: String
})

module.exports = mongoose.model('jobs', JobSchema)