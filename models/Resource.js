import mongoose from 'mongoose'

const { Schema } = mongoose;

const ResourceSchema = new Schema({
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
    default: [],
  },

  image_url: {
    type: String, 
    required: false,
    default: '',
  },

  tag: {
    type: [String],
    required: false,
    default: []
  },

});

export default mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);