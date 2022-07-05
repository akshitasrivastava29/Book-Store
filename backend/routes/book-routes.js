const express=require('express');
// const { restart } = require('nodemon');
const router=express.Router();
const Book=require("../model/Book")
const booksController=require('../controllers/books-controller');


router.get("/",booksController.getALLBooks);
router.post('/',booksController.addBook);
router.get("/:id",booksController.getById);
router.put('/:id',booksController.updateBook);
router.delete('/:id',booksController.deleteBook);
module.exports=router;
// const express = require("express");
// const router = express.Router();
// const Book = require("../model/Book");
// const booksController = require("../controllers/books-controller");

// router.get("/", booksController.getALLBooks);
// router.post("/", booksController.addBook);
// router.get("/:id", booksController.getById);
// router.put("/:id", booksController.updateBook);
// router.delete("/:id", booksController.deleteBook);

// module.exports = router;
