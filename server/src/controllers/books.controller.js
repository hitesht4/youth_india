const express = require("express");

const Book = require("../models/book.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const books = await Book.find({ id: id });
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    let book = await Book.deleteOne({ id: bookId });
    if (book) {
      return res.json({ message: "Book deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const newBook = await Book.create(body);
    return res.json({ message: "Book Added successfully", data: newBook });
  } catch (e) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const bookId = req.params.id;
    const updatedBook = await Book.findOneAndUpdate({ id: bookId }, req.body, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ error: "Unable to Update Book" });
    }
    res.json({ data: updatedBook });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
