const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./src/configs/db");
const booksRouter = require("./src/controllers/books.controller");
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to Books Library");
});
app.use(cors());
app.use(express.json());
app.use("/books", booksRouter);

app.listen(PORT, async () => {
  try {
    await connect;
    console.log("Connected to db successfully");
  } catch (e) {
    console.log(e);
  }

  console.log(`Listening to port ${PORT}`);
});
