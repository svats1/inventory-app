#! /usr/bin/env node

console.log("This script populates data to your database.");

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/Category");
// const Genre = require("./models/genre");

// const genres = [];
const categories = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// async function genreCreate(name) {
//   const genre = new Genre({ name: name });
//   await genre.save();
//   genres.push(genre);
//   console.log(`Added genre: ${name}`);
// }

async function categoryCreate(name, description) {
  categorydetail = { name: name, description: description };

  const category = new Category(categorydetail);
  await category.save();
  categories.push(category);
  console.log(`Added Category: ${name} ${description}`);
}

// async function bookCreate(title, summary, isbn, Category, genre) {
//   bookdetail = {
//     title: title,
//     summary: summary,
//     Category: Category,
//     isbn: isbn,
//   };
//   if (genre != false) bookdetail.genre = genre;

//   const book = new Book(bookdetail);
//   await book.save();
//   books.push(book);
//   console.log(`Added book: ${title}`);
// }

// async function createGenres() {
//   console.log("Adding genres");
//   await Promise.all([
//     genreCreate("Fantasy"),
//     genreCreate("Science Fiction"),
//     genreCreate("French Poetry"),
//   ]);
// }

async function createCategories() {
  console.log("Adding Categories");
  await Promise.all([
    categoryCreate("Strings", "Stringed instruments"),
    categoryCreate("Keys", "Piano/Keyboards/Accordion"),
    categoryCreate("Percussion", "We Have the Beats"),
    categoryCreate("Wind", "Whoooooooo Sounds"),
  ]);
}

// async function createBooks() {
//   console.log("Adding Books");
//   await Promise.all([
//     bookCreate(
//       "The Name of the Wind (The Kingkiller Chronicle, #1)",
//       "I have stolen princesses back from sleeping barrow kings. I burned down the town of Trebon. I have spent the night with Felurian and left with both my sanity and my life. I was expelled from the University at a younger age than most people are allowed in. I tread paths by moonlight that others fear to speak of during day. I have talked to Gods, loved women, and written songs that make the minstrels weep.",
//       "9781473211896",
//       Categorys[0],
//       [genres[0]]
//     ),
//     bookCreate(
//       "The Wise Man's Fear (The Kingkiller Chronicle, #2)",
//       "Picking up the tale of Kvothe Kingkiller once again, we follow him into exile, into political intrigue, courtship, adventure, love and magic... and further along the path that has turned Kvothe, the mightiest magician of his age, a legend in his own time, into Kote, the unassuming pub landlord.",
//       "9788401352836",
//       Categorys[0],
//       [genres[0]]
//     ),
//     bookCreate(
//       "The Slow Regard of Silent Things (Kingkiller Chronicle)",
//       "Deep below the University, there is a dark place. Few people know of it: a broken web of ancient passageways and abandoned rooms. A young woman lives there, tucked among the sprawling tunnels of the Underthing, snug in the heart of this forgotten place.",
//       "9780756411336",
//       Categorys[0],
//       [genres[0]]
//     ),
//     bookCreate(
//       "Apes and Angels",
//       "Humankind headed out to the stars not for conquest, nor exploration, nor even for curiosity. Humans went to the stars in a desperate crusade to save intelligent life wherever they found it. A wave of death is spreading through the Milky Way galaxy, an expanding sphere of lethal gamma ...",
//       "9780765379528",
//       Categorys[1],
//       [genres[1]]
//     ),
//     bookCreate(
//       "Death Wave",
//       "In Ben Bova's previous novel New Earth, Jordan Kell led the first human mission beyond the solar system. They discovered the ruins of an ancient alien civilization. But one alien AI survived, and it revealed to Jordan Kell that an explosion in the black hole at the heart of the Milky Way galaxy has created a wave of deadly radiation, expanding out from the core toward Earth. Unless the human race acts to save itself, all life on Earth will be wiped out...",
//       "9780765379504",
//       Categorys[1],
//       [genres[1]]
//     ),
//     bookCreate(
//       "Test Book 1",
//       "Summary of test book 1",
//       "ISBN111111",
//       Categorys[4],
//       [genres[0], genres[1]]
//     ),
//     bookCreate(
//       "Test Book 2",
//       "Summary of test book 2",
//       "ISBN222222",
//       Categorys[4],
//       false
//     ),
//   ]);
// }
