const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  name: {
    type: String,
    required: true,
  },
  builds_created: {
    type: [String],
    default: [],
  },
  resources_uploaded: {
    type: [String],
    default: [],
  },
  builds_favorited: {
    type: [String],
    default: [],
  },
  resources_favorited: {
    type: [String],
    default: [],
  },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
