const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        isbn: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        published_date: {
            type: Date
        },
        publisher: {
            type: String
        },
        front_cover: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = Book = mongoose.model('book', BookSchema);