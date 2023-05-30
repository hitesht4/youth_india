const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://hitesh123:hitesh123@cluster0.0rcyd.mongodb.net/books");


module.exports=connect;