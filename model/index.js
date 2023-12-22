const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  year: {
    required: true,
    type: String,
  },
  runTime: {
    required: true,
    type: String,
  },
  genre: {
    required: true,
    type: String,
  },
  plot: {
    required: true,
    type: String,
  },
  director: {
    required: true,
    type: String,
  },
  actors: {
    required: true,
    type: String,
  },
  runTime: {
    required: true,
    type: String,
  },
  imdbRating: {
    type: String,
  },
  imdbID: {
    type: String,
  }
})

module.exports = mongoose.model('imbd', dataSchema);