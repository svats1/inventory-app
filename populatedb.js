#! /usr/bin/env node

console.log("This script populates data to your database.");

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/Category");
const Item = require("./models/Item");

// const Genre = require("./models/genre");

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
  await createItems();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

async function categoryCreate(name, description) {
  categorydetail = { name: name, description: description };

  const category = new Category(categorydetail);
  await category.save();
  categories.push(category);
  console.log(`Added Category: ${name} ${description}`);
}

async function itemCreate(
  name,
  description,
  price,
  category,
  brand,
  model,
  quantity
) {
  itemdetail = {
    name: name,
    description: description,
    price: price,
    category: category,
    brand: brand,
    model: model,
    quantity: quantity,
  };

  const item = new Item(itemdetail);
  await item.save();
  console.log(`Added item: ${name} ${description}`);
}

async function createCategories() {
  console.log("Adding Categories");
  await categoryCreate("Strings", "Stringed instruments");
  await categoryCreate("Keys", "Piano, Keyboards, Accordion, etc.");
  await categoryCreate(
    "Percussion",
    "Drums, Snares, Tabla, Percussive Instruments, etc."
  );
  await categoryCreate("Wind", "Trumpets, Saxophones, Flutes, etc.");
}

async function createItems() {
  console.log("Adding Items");
  await Promise.all([
    itemCreate(
      "Guitar",
      "A guitar is a musical instrument that produces sound by sympathetic vibration of air in a string (or more accurately, by harmonic vibrations).",
      "100",
      categories[0],
      "Fender",
      "Stratocaster",
      "1"
    ),
    itemCreate(
      "Piano",
      "A piano is a musical instrument that is played using a keyboard, a row of brass or woodwinds.",
      "200",
      categories[1],
      "Yamaha",
      "Yamaha",
      "1"
    ),
    itemCreate(
      "Bass Guitar",
      "A bass guitar is a stringed musical instrument, in the form of a bass drum, with a single string.",
      "300",
      categories[0],
      "Fender",
      "JazzMaster",
      "1"
    ),
    itemCreate(
      "Electric Guitar",
      "An electric guitar is a guitar that uses an electric motor to produce sound.",
      "400",
      categories[0],
      "Fender",
      "Stratocaster",
      "1"
    ),
    itemCreate(
      "Trumpet",
      "A trumpet is a musical instrument that is a brass instrument with a flat top.",
      "500",
      categories[3],
      "Fender",
      "Telecaster",
      "1"
    ),
    itemCreate(
      "Flute",
      "A flute is a musical instrument that is a woodwind instrument.",
      "600",
      categories[3],
      "Fender",
      "Stratocaster",
      "1"
    ),
    itemCreate(
      "Drums",
      "A drums is a musical instrument that is a percussion instrument.",
      "700",
      categories[2],
      "Tama",
      "Tama",
      "1"
    ),
    itemCreate(
      "Tabla",
      "A tabla is a percussion instrument that is a drum.",
      "800",
      categories[2],
      "India",
      "India",
      "1"
    ),
    itemCreate(
      "Snare",
      "A snare is a percussion instrument that is a drum.",
      "900",
      categories[2],
      "Tama",
      "Tama",
      "1"
    ),
    itemCreate(
      "Keyboard",
      "A keyboard is a musical instrument that is a piano.",
      "1000",
      categories[1],
      "Yamaha",
      "Yamaha",
      "1"
    ),
  ]);
}
