/* eslint-disable implicit-arrow-linebreak */
import Resource from '../models/resources';

const ResourceRepository = {
  getAll: async (limit) =>
    new Promise((resolve, reject) => {
      Resource.find({}, (err, resources) => {
        if (err) {
          reject(err);
        }
        resolve(resources);
      }).limit(limit);
    }),

  getByTitle: async (title) =>
    new Promise((resolve, reject) => {
      Resource.findOne({ title }, (err, resource) => {
        if (err) {
          reject(err);
        }
        resolve(resource);
      });
    }),

  getById: async (id) =>
    new Promise((resolve, reject) => {
      Resource.findById(id, (err, resource) => {
        if (err) {
          reject(err);
        }
        resolve(resource);
      });
    }),

  createResource: (resource) =>
    new Promise((resolve, reject) => {
      const resourceModel = new Resource(resource);
      resourceModel.save((err, resource) => {
        if (err) {
          reject(err);
        }
        resolve(resource);
      });
    }),
};

export default ResourceRepository;
