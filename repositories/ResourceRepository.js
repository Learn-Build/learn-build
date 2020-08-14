import Resource from '../models/Resource'

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
