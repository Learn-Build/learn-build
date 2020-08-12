import connect from '../db/connect';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  favorite_build_ids: {
    type: [String],
    default: [],
  },
  favorite_resource_ids: {
    type: [String],
    default: [],
  },
});

module.exports = connect().model('User', UserSchema);
