const Game = require("../model/Game.js");

exports.createGame = (gameData) => {
  const { platform, name, image, price, genre, description } = gameData;
  if (!platform || !name || !image || !price || !genre || !description) {
    throw new Error("All fields need to be filled");
  }
  const game = Game.create(gameData);
  return game;
};
exports.getAllGames = () => {
  return Game.find();
};
