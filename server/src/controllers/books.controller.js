const express=require("express");

const Book=require("../models/book.model");
const router=express.Router();

router.get('/', async (req, res) => {
    try {
      const books = await Book.find(); // Fetches all books from the database
  
      res.json(books); // Sends the books as a JSON response
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.delete('/books/:id', async (req, res) => {
    try {
      const bookId = req.params.id;
      const deletedBook = await Book.findByIdAndRemove(bookId);
  
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/books/:id', async (req, res) => {
    try {
      const bookId = req.params.id;
      const updatedBook = await Book.findByIdAndUpdate(bookId, req.body, {
        new: true,
      });
  
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
  
      res.json(updatedBook);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  module.exports=router;