const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  platform: {
    type: String,
    require: [true, "Platform is required"],
  },
  name: {
    type: String,
    require: [true, "Name is required"],
  },
  image: {
    type: String,
    require: [true, "image is required"],
    match: [/^https?:\/\//, "Invalid url"],
  },
  price: {
    type: Number,
    require: [true, "Price is required"],
  },
  genre: {
    type: String,
    require: [true, "Genre is required"],
  },
  description: {
    type: String,
    require: false,
  },
});

const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
