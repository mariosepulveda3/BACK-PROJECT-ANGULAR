const mongoose = require("mongoose");
const Book = require("../../api/books/books.model");
const DB_URL = process.env.DB_URL;
const { connectDb } = require('../database/db') 

const books = [

  {
    title: "Dispara, yo ya estoy muerto",
    img: "https://m.media-amazon.com/images/I/51tRmqv6N8L.jpg",
    author: "Julia Navarro",
    synopsis: "Dispara, yo ya estoy muerto es una novela histórica de Julia Navarro, publicada en 2013 por el sello Plaza & Janés, que mezcla historia, suspenso, drama, y política en una novela que se desarrolla desde finales de siglo XIX hasta 1948.",
    datePublication: 16/06/2016,
  },
  {
    title: "El juego de Ender",
    img: "https://m.media-amazon.com/images/I/4112ZnvAI3L.jpg",
    author: "Orson Scott Card",
    synopsis: "La Tierra se ve amenazada por la especie extraterrestre delos Insectores, seres que se comunican telepáticamente y que se consideran totalmente distintos de los humanos, a los que quieren destruir. Para vencerlos, la humanidad necesita de un genio militar, y por ello se permite el nacimiento de Ender, que es el tercer hijo de una pareja en el mundo que ha limitado estrictamente a dos el número de descendientes.",
    datePublicated: 15/01/1985,
  },
  {
    title: "Cien años de soledad",
    img: "https://imagessl8.casadellibro.com/a/l/t7/08/9788497592208.jpg",
    author: "Gabriel García Márquez",
    synopsis: "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo. En medio, una larga docena de personajes dejarán su impronta a las generaciones venideras, que tendrán que lidiar con un mundo tan complejo como sencillo.",
    datePublicated: 05-03-1967,
  },
  {
    title: "Diario de Ana Frank",
    img: "https://imagessl7.casadellibro.com/a/l/t7/37/9788483467237.jpg",
    author: "Annelies Marie Frank",
    synopsis: "Tras la invasión a Holanda, los Frank, comerciantes judíos alemanes emigrados a Amsterdam en 1933, se ocultaron de la Gestapo en una buhardilla anexa al edificio donde el padre de Ana tenía sus oficinas. Eran ocho personas y permanecieron recluidas desde junio de 1942 hasta agosto de 1944, fecha en que fueron detenidos y enviados a un campo de concentración. En ese lugar, y en las más precarias condiciones, Ana, a la sazón una niña de trece años, escribió su estremecedor Diario: un testimonio único en su género sobre el horror y la barbarie nazi, y sobre los sentimientos y experiencias de la propia Ana y sus acompañantes. Ana murió en el campo de Bergen-Belsen en marzo de 1945. Su Diario nunca morirá.",
    datePublicated: 1947-06-25,
  },
  {
    title: "El retrato de Dorian Gray",
    img: "https://imagessl6.casadellibro.com/a/l/t7/36/9788467032536.jpg",
    author: "Oscar Wilde",
    synopsis: "Grandes Clásicos Literatura Random House recupera en esta preciosa edición El retrato de Dorian Gray, la maravillosa obra maestra de Oscar Wilde.En su única novela, el divino Oscar Wilde puso al día el mito de Fausto. En este caso, la víctima es Dorian Gray, un bello y presuntuoso joven a quien un amigo hace un retrato al óleo. Cuando Dorian trabe amistad con lord Henry Wotton, un cínico filósofo, este le convencerá de que sus más valiosas posesiones son su belleza y su juventud. Y, a partir de ahí, su deseo de que su retrato envejezca mientras él permanece joven se hace realidad. Pero ¿a qué precio?Estamos, simple y llanamente, ante uno de los libros más bellos e ingeniosos de todos los tiempos.Luis Antonio de Villena dijo... 'Un libro lleno de fascinación y encanto, fácil y difícil a la vez, y cuyo único protagonista y tema esencial es la belleza. Una de las pasiones que hacen vivir y dan sentido y fuerza al mundo.'",
    datePublication: 20/06/1890,
  },
  {
    title: "Los Miserables",
    img: "https://pictures.abebooks.com/isbn/9788435010825-es.jpg",
    author: "Victor Hugo",
    synopsis: "Jean Valjean, un exconvicto al que encerraron durante veinte años por robar un pedazo de pan, se convierte en un hombre ejemplar que lucha contra la miseria y la injusticia y que empeña su vida en cuidar a la hija de una mujer que ha debido prostituirse para salvar a la niña. Así, Jean Valjean se ve obligado a cambiar varias veces de nombres, es apresado, se fuga y reaparece. Al mismo tiempo, debe eludir al comisario Javert, un policía inflexible que lo persigue convencido de que tiene cuentas pendientes con la justicia. El enfrentamiento entre ambos se produce durante las revueltas de 1832 en París, donde, en las barricadas, un grupo de jóvenes idealistas planta cara al ejército en defensa de la libertad. Y, entre todo ello, historias de amor, de sacrificio, de redención, de amistad. Por que el progreso, la ley, el alma, Dios, la Revolución francesa, la prisión, el contrato social, el crimen, las cloacas de París, el idilio amoroso, el maltrato, la pobreza, la justicia? todo tiene cabida en la más extensa y famosa obra de Víctor Hugo, Los miserables. Magistral crónica de la historia de Francia en la primera mitad del XIX, desde Waterloo hasta las barricadas de 1848, Víctor Hugo buscó voluntariamente con Los miserables un género literario a la medida del hombre y del mundo moderno, una novela total. No en balde, concluye así: «... mientras haya en la tierra ignorancia y miseria, libros como éste podrían no ser inútiles». Por fin una traducción íntegra y revisada a partir del original francés del siglo XIX",
    datePublication: 24/10/1862,
  },
  {
    title: "Los Pilares de la Tierra",
    img: "https://imagessl0.casadellibro.com/a/l/t7/10/9788401328510.jpg",
    author: "Ken Follett",
    synopsis: "Los pilares de la tierra, quizá la obra más conocida de Ken Follett, es considerada como una de las grandes novelas históricas de los últimos 50 años y ha sido adaptada tanto a la televisión, en forma de miniserie, como al videojuego. El gran maestro de la narrativa y el suspense nos transporta a la Edad Media, a un fascinante mundo de reyes, damas, caballeros, pugnas feudales, castillos y ciudades amuralladas. El amor y la muerte se entrecruzan vibrantemente en este magistral tapiz cuyo centro es la construcción de una catedral gótica. La historia se inicia con el ahorcamiento público de un inocente y finaliza con la humillación de un rey. Los pilares de la tierra es la obra maestra de Ken Follett y constituye una excepcional evocación de una época de violentas pasiones.",
    datePublication: 12/02/1989,
  },
  {
    title: "Cinco horas con Mario",
    img: "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/309/original/portada_cinco-horas-con-mario_miguel-delibes_201911041312.jpg",
    author: "Miguel Delibes",
    synopsis: "Una mujer acaba de perder a su marido y vela el cadáver durante la noche. Sobre la mesilla hay un libro 'la Biblia' que la esposa hojea. Va leyendo los párrafos subrayados por el hombre que se ha ido para siempre. Una oleada de recuerdos le viene a la mente y empieza un lento, desordenado monólogo en el que la vida pugna por hacerse real otra vez. La pobre vida llena de errores y torpezas, de pequeños goces e incomprensiones. ¿Ha conocido Carmen alguna vez a Mario? Escuchemos el irritante discurrir de la pequeña y estrecha mentalidad de la esposa. Otro hombre irá poco a poco descubriéndose, para todos menos para ella, con toda su desesperanza y su fe en la vida. Cinco horas con Mario es una novela de gran penetración psicológica que, a través de un alma femenina puesta al descubierto, llega hasta el fondo de la sociedad española de su tiempo. Sólo un escritor de la categoría de Miguel Delibes podía enfrentarse con este difícil tema y resolverlo tan brillantemente.",
    datePublication: 17/11/1966,
  },
  {
    title: "La montaña mágica",
    img: "https://quelibroleo.com/images/libros/libro_1361074476.jpg",
    author: "Thomas Mann",
    synopsis: "La acción de esta novela transcurre en un sanatorio de tuberculosos en Zauberberg, que recientemente ha sido noticia por su cierre definitivo, donde coinciden dos primos de caracteres muy distintos. Más que en los sucesos (el conocimiento con Clavdia Chauchat o con una pareja de peculiares y enfrentados pensadores, los pequeños conflictos generados por la convivencia entre personajes de muy distinta procedencia, el goteo constante de fallecimientos, etc.), el interés de la novela reside en la perfecta reproducción de la vida interior, afectiva e intelectual, de la amplia galería de personajes que despliega Mann ante los ojos del lector, todos ellos perfectamente individualizados e interesantes por sí mismos. A partir de ahí, las reflexiones sobre temas muy diversos que van desde la política hasta la estética, pasando por la naturaleza del tiempo, aportan una visión panorámica de la Europa de la época, con una profundidad realmente extraordinaria en la literatura de todos los tiempos.",
    datePublication: 16/11/1924,
  },
  {
    title: "Dune",
    img: "https://revistamutaciones.com/wp-content/uploads/2021/09/dune-frank-herbert-novela-adaptacion.jpg",
    author: "Frank Herbert",
    synopsis: "En el desértico planeta Arrakis, el agua es el bien más preciado y llorar a los muertos, el símbolo de máxima prodigalidad. Pero algo hace de Arrakis una pieza estratégica para los intereses del Emperador, las Grandes Casas y la Cofradía, los tres grandes poderes de la galaxia. Arrakis es el único origen conocido de la melange, preciosa especia y uno de los bienes más codiciados del universo. Al duque Leto Atreides se le asigna el gobierno de este mundo inhóspito, habitado por los indómitos Fremen y monstruosos gusanos de arena de centenares de metros de longitud. Sin embargo, cuando la familia es traicionada, su hijo y heredero, Paul, emprenderá un viaje hacia un destino más grande del que jamás hubiese podido soñar. Mezcla fascinante de aventura, misticismo, intrigas políticas y ecologismo, Dune se convirtió, desde el momento de su publicación, en un fenómeno de culto y en la mayor epopeya de ciencia-ficción de todos los tiempos.",
    datePublication: 02/08/1965,
  },
  {
    title: "El Gran Gatsby",
    img: "https://www.nordicalibros.com/wp-content/uploads/2018/10/elgrangatsby.jpg",
    author: "F. Scott Fitzgerald",
    synopsis: "Nick Carraway deja el Medio Oeste y llega a Nueva York en la primavera de 1922, una época de relajamiento moral y contrabando, en la que la Bolsa sube como la espuma. Nick, que busca su propia versión del sueño americano, tiene como vecino a un misterioso millonario, Jay Gatsby, muy popular por sus impresionantes fiestas. Al otro lado de la bahía viven Daisy y su mujeriego marido, Tom Buchanan. El joven Nick se verá inmerso en el mundo cautivador de los millonarios, sus ilusiones, amores y engaños.",
    datePublication: 10/04/1925,
  },
  {
    title: "Crimen y castigo",
    img: "https://quelibroleo.com/images/libros/libro_1362370739.png",
    author: "Fiódor Dostoyevski",
    synopsis: "Crimen y castigo (1866), considerada por la crítica como la primera obra maestra de Dostoievski, es un profundo análisis psicológico de su protagonista, el joven estudiante Raskolnikov, cuya firme creencia en que los fines humanitarios justifican la maldad le conduce al asesinato de un usurero petersburgués. Pero, desde que comete el crimen, la culpabilidad será una pesadilla constante con la que el estudiante será incapaz de convivir. El estilo enfebrecido y compasivo de Dostoievski sigue con maestría única los recovecos de las contradictorias emociones del estudiante y refleja la lucha extrema que libra con su conciencia mientras deambula por las calles de San Petersburgo. Ya en prisión, Raskolnikov se da cuenta de que la felicidad no puede ser alcanzada siguiendo un plan establecido a priori por la razón: ha de ganarse con sufrimiento.",
    datePublication: 22/07/1866,
  },
  {
    title: "La ladrona de libros",
    img: "https://m.media-amazon.com/images/I/81DinLQTpsL.jpg",
    author: "Markus Zusak",
    synopsis: "En plena II Guerra Mundial, la pequeña Liesel hallará su salvación en la lectura. Una novela preciosa, tremendamente humana y emocionante, que describe las peripecias de una niña alemana de nueve años desde que es dada en adopción por su madre hasta el final de la guerra. Su nueva familia, gente sencilla y nada afecta al nazismo, le enseña a leer y a través de los libros Rudy logra distraerse durante los bombardeos y combatir la tristeza. Pero es el libro que ella misma está escribiendo el que finalmente le salvará la vida.",
    datePublication: 11/05/2005,
  },
  {
    title: "Romeo y Julieta",
    img: "https://www.editorialjuventud.es/wp-content/uploads/2018/08/0803.jpg",
    author: "William Shakespeare",
    synopsis: "La clásica obra sobre los amantes más famosos de la historia literaria, en una preciosa edición en tapa dura. El tiempo no ha cerrado las heridas de los Montesco y los Capuleto, dos familias de Verona enemistadas por antiguos pleitos cuyo origen ya casi nadie alcanza a recordar. Con el odio llegó la violencia, y con la violencia, las primeras víctimas inocentes. Pero del odio nació también el amor entre dos jóvenes predestinados a la desventura: Romeo y Julieta. La suya es una de las historias más populares de todos los tiempos, a la vez que su trágico desenlace se ha convertido en un hito de la literatura universal, «pues jamás hubo tan triste suceso como este de Julieta y de Romeo».",
    datePublication: 29/01/1595,
  },
  {
    title: "Asesinato en el Orient Express",
    img: "https://m.media-amazon.com/images/I/818nb12JQEL.jpg",
    author: "Agatha Christie",
    synopsis: "En un lugar aislado de la antigua Yugoslavia, en plena madrugada, una fuerte tormenta de nieve obstaculiza la línea férrea por donde circula el Orient Express. Procedente de la exótica Estambul, en él viaja el detective Hércules Poirot, que repentinamente se topa con uno de los casos más desconcertantes de su carrera: en el compartimiento vecino ha sido asesinado Samuel E. Ratchett mientras dormía, pese a que ningún indicio trasluce un móvil concreto. Poirot aprovechará la situación para indagar entre los ocupantes del vagón, que a todas luces deberían ser los únicos posibles autores del crimen.Una víctima, doce sospechosos y una mente privilegiada en busca de la verdad.",
    datePublication: 01/01/1934,
  },
  {
    title: "El cuento de la criada",
    img: "https://images-na.ssl-images-amazon.com/images/I/71+vNgYG26L.jpg",
    author: "Margaret Atwood",
    synopsis: "En la República de Gilead, el cuerpo de Defred sólo sirve para procrear, tal como imponen las férreas normas establecidas por la dictadura puritana que domina el país. Si Defred se rebela —o si, aceptando colaborar a regañadientes, no es capaz de concebir— le espera la muerte en ejecución pública o el destierro a unas Colonias en las que sucumbirá a la polución de los residuos tóxicos. Así, el régimen controla con mano de hierro hasta los más ínfimos detalles de la vida de las mujeres: su alimentación, su indumentaria, incluso su actividad sexual. Pero nadie, ni siquiera un gobierno despótico parapetado tras el supuesto mandato de un dios todopoderoso, puede gobernar el pensamiento de una persona. Y mucho menos su deseo. Los peligros inherentes a mezclar religión y política; el empeño de todo poder absoluto en someter a las mujeres como paso conducente a sojuzgar a toda la población; la fuerza incontenible del deseo como elemento transgresor: son tan sólo una muestra de los temas que aborda este relato desgarrador, aderezado con el sutil sarcasmo que constituye la seña de identidad de Margaret Atwood. Una escritora universal que, con el paso del tiempo, no deja de asombrarnos con la lucidez de sus ideas y la potencia de su prosa.",
    datePublication: 19/03/1985,
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