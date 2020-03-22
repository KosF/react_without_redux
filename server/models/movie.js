const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  year: Number,
  poster: String,
  directorId: String
});

module.exports = mongoose.model("Movie", movieSchema);
