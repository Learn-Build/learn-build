/* eslint-disable implicit-arrow-linebreak */
import Tag from '../models/tag';

const TagRepository = {
  getAll: async (limit) =>
    new Promise((resolve, reject) => {
      Tag.find({}, (err, tags) => {
        if (err) {
          reject(err);
        }
        resolve(tags);
      }).limit(limit);
    }),

  getById: async (id) =>
    new Promise((resolve, reject) => {
      Tag.findById(id, (err, build) => {
        if (err) {
          reject(err);
        }
        resolve(build);
      });
    }),

  createTag: (tag) =>
    new Promise((resolve, reject) => {
      const tagModel = new Tag(tag);
      tagModel.save((err, tag) => {
        if (err) {
          reject(err);
        }
        resolve(tag);
      });
    }),
};

export default TagRepository;
