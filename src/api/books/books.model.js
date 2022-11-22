const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema (
    {
        title: { type: String },
        img: { type: String, default: "https://freepngimg.com/thumb/book/37234-9-book-clipart.png"},
        author: { type: String },
        synopsis: { type: String },
        datePublicated: { type: String },
    },
    {
        timestamps: true
    }
);

const Book = mongoose.model('books', bookSchema);

module.exports = Book;