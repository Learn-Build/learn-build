import mongoose from 'mongoose';

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
  user_id: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: false,
    default: null,
  },
  tags: {
    type: [String],
    required: false,
    default: null,
  },
  favorite_count: {
    type: Number,
    required: false,
    default: 0,
  },
  resources: {
    type: [String],
    required: false,
    default: null,
  },
});

export default mongoose.models.Build || mongoose.model('Build', BuildSchema);
