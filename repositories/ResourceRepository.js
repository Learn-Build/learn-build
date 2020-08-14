
import Resource from '../models/resources'

const ResourceRepository = {
    getByTitle: async (title) => {
      return new Promise((resolve, reject) => {
        Resource.findOne({ title: title }, (err, resource) => {
          if (err) {
            reject(err)
          }
          resolve(resource)
        })
      })
        
    },

    getById: async (id) => {
        return new Promise((resolve, reject) => {
            Resource.findById(id, (err, resource) => {
                if (err) {
                    reject(err);
                }
                resolve(resource);
            });
        })
    },

    createResource: (resource) => {
      return new Promise((resolve, reject) => {
        const resourceModel = new Resource(resource)
        resourceModel.save((err, resource) => {
            if (err) {
                reject(err)
            }
            resolve(resource)
        })
      })
        
    }
}

export default ResourceRepository