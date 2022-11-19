const mongoose = require("mongoose");
const Movie = require("../../api/movies/movies.model");
const DB_URL = process.env.DB_URL;

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
    title: "",
    img: "",
    author: "",
    synopsis: "",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
    title: "",
    img: "",
    author: "",
    synopsis: "",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
    title: "",
    img: "",
    author: "",
    synopsis: "",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
    title: "",
    img: "",
    author: "",
    synopsis: "",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
    title: "",
    img: "",
    author: "",
    synopsis: "",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },
  {
    title: "",
    img: "",
    author: "",
    synopsis: "",
    numberPages: "",
    editorial: "",
    datePublication: "",
    sales: "",
  },



];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allMovies = await Movie.find().lean();

    if (!allMovies.length) {
      console.log("[seed]: No movies found");
    } else {
      console.log(`[seed]: Found ${allMovies.length} movies`);
      await Movie.collection.drop();
      console.log("[seed]: Movie deleted correctly");
    }
  })
  .catch((error) =>
    console.log("[seed]: Error finding movie: ", error)
  )
  .then(async () => {
    await Movie.insertMany(movies);
    console.log("[seed]: New movies added");
  })
  .catch((error) => console.log("[seed]: Error adding movie", error))
  .finally(() => mongoose.disconnect());