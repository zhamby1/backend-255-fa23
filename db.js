const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://sdev255:password255@songdb.hw1e0cp.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser: true})

module.exports = mongoose