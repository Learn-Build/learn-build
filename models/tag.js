import connect from '../db/connect';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const TagSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
  image_url: {
    type: String, 
    required: false,
    default: null,
  },
});

module.exports = connect().model('Tag', TagSchema);