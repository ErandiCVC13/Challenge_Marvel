const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  title: {
    type: String,
    unique: true,
    required: true,
  },
  release_date: {
    type: Date,
    required: false,
  },
  duration: {
    type: Number,
    required: false,
  },
  overview: {
    type: String,
    required: false,
  },
  cover_url: {
    type: String,
    required: false,
  },
  trailer_url: {
    type: String,
    required: false,
  },
  directed_by: {
    type: String,
    required: false,
  },
  phase: {
    type: Number,
    required: false,
  },
  saga: {
    type: String,
    required: false,
  },
  chronology: {
    type: Number,
    required: false,
  },
  post_credit_scenes: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("Movie", MovieSchema);
