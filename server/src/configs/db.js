const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODB;

const connect = mongoose.connect(url);

module.exports = connect;
