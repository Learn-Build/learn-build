import connect from '../db/connect';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const BuildSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    
  },
  comments: {
    type: String,
    default: '', // again, not sure about defaults
  },

  image_url: {
    type: String, 
    required: false,
    default: null,
  },

  tag: {
    type: String,
    required: false,
    default: ''
  },

});

module.exports = connect().model('Build', BuildSchema);