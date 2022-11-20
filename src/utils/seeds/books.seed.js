const mongoose = require("mongoose");
const Book = require("../../api/books/books.model");
const DB_URL = process.env.DB_URL;
const { connectDb } = require('../database/db') 

const books = [

  {
    title: "dispara, yo ya estoy muerto",
    img: "https://m.media-amazon.com/images/I/51tRmqv6N8L.jpg",
    author: "Julia Navarro",
    synopsis: "Dispara, yo ya estoy muerto es una novela histórica de Julia Navarro, ​ publicada en 2013 por el sello Plaza & Janés, que mezcla historia, suspenso, drama, y política en una novela que se desarrolla desde finales de siglo XIX hasta 1948.",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
    title: "Harry Potter y la piedra filosofal",
    img: "https://m.media-amazon.com/images/I/91R1AixEiLL.jpg",
    author: "J. K. Rowling",
    synopsis: "Harry Potter y la piedra filosofal, es el primer libro de la serie literaria Harry Potter, escrito por la autora británica J. K. Rowling en 1997, que supuso además el debut de Rowling como escritora profesional. La novela fue rechazada por varias editoriales hasta que la editorial Bloomsbury se decidió a publicarla.",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
  //   title: "",
  //   img: "",
  //   author: "",
  //   synopsis: "",
  //   numberPages: "",
  //   editorial: "",
  //   datePublication: "",
  //   sales: "",
  // },
  // {
  //   title: "",
  //   img: "",
  //   author: "",
  //   synopsis: "",
  //   numberPages: "",
  //   editorial: "",
  //   datePublication: "",
  //   sales: "",
  // },
  // {
  //   title: "",
  //   img: "",
  //   author: "",
  //   synopsis: "",
  //   numberPages: "",
  //   editorial: "",
  //   datePublication: "",
  //   sales: "",
  // },
  // {
  //   title: "",
  //   img: "",
  //   author: "",
  //   synopsis: "",
  //   numberPages: "",
  //   editorial: "",
  //   datePublication: "",
  //   sales: "",
  // },
  // {
  //   title: "",
  //   img: "",
  //   author: "",
  //   synopsis: "",
  //   numberPages: "",
  //   editorial: "",
  //   datePublication: "",
  //   sales: "",
  // },
  // {
  //   title: "",
  //   img: "",
  //   author: "",
  //   synopsis: "",
  //   numberPages: "",
  //   editorial: "",
  //   datePublication: "",
  //   sales: "",
  },
];

connectDb()
  .then(async () => {
    const allBooks = await Book.find().lean();

    if (!allBooks.length) {
      console.log("[seed]: No books found");
    } else {
      console.log(`[seed]: Found ${allBooks.length} books`);
      await Book.collection.drop();
      console.log("[seed]: Book deleted correctly");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error finding book: ", error)
  )
  .then(async () => {
    await Book.insertMany(books);
    console.log("[seed]: New books added");
  })
  .catch((error) => console.log("[seed]: Error adding book", error))
  .finally(() => mongoose.disconnect());