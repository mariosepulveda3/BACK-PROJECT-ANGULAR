const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema (
    {
        title: { type: String, required: true },
        img: { type: String, required: true, default: "https://freepngimg.com/thumb/book/37234-9-book-clipart.png"},
        author: { type: String , required: true },
        synopsis: { type: String , required: true },
        numberPages: { type: String },
        editorial: { type: String },
        datePublication: { type: Date },
        sales: { type: Number },
    },
    {
        timestamps: true
    }
);

const Book = mongoose.model('books', bookSchema);

module.exports = Book;