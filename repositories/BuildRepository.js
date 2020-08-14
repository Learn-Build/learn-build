/* eslint-disable implicit-arrow-linebreak */
import Build from '../models/build';

const BuildRepository = {
  getAll: async (limit) =>
    new Promise((resolve, reject) => {
      Build.find({}, (err, builds) => {
        if (err) {
          reject(err);
        }
        resolve(builds);
      }).limit(limit);
    }),

  getByTitle: async (title) =>
    new Promise((resolve, reject) => {
      Build.findOne({ title }, (err, build) => {
        if (err) {
          reject(err);
        }
        resolve(build);
      });
    }),

  getById: async (id) =>
    new Promise((resolve, reject) => {
      Build.findById(id, (err, build) => {
        if (err) {
          reject(err);
        }
        resolve(build);
      });
    }),

  createBuild: (build) =>
    new Promise((resolve, reject) => {
      const buildModel = new Build(build);
      buildModel.save((err, build) => {
        if (err) {
          reject(err);
        }
        resolve(build);
      });
    }),
};

export default BuildRepository;
