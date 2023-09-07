const express = require("express");
const { getBooks, getBookById, createBook, updateBook, deleteBook } = require("../controllers/bookController");
const router = express.Router();

router.route("/").get(getBooks);
router.route("/:id").get(getBookById)
router.route("/").post(createBook)
router.route("/:id").put(updateBook)
router.route("/:id").delete(deleteBook)


module.exports = router;