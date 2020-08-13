import connect from '../db/connect';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResourcesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: {
    type: [String],
    default: '', //uhhhh, is that okay (want blank string)
  },

  image_url: {
    type: String, //Listed as array in google doc, but not everywhere -- url shouldn't be array ? 
    required: false,
    default: null, //not sure if this is okay either
  },

  tag: {
    type: [String],
    required: false,
  },

});

module.exports = connect().model('Resources', ResourcesSchema);