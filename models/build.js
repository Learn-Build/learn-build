import mongoose from 'mongoose'

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
    type: [String],
    default: [],
  },

  image_url: {
    type: String,
    required: false,
    default: null,
  },

  tag: {
    type: [String],
    required: false,
    default: null,
  },

});

export default mongoose.models.Build || mongoose.model('Build', BuildSchema);
