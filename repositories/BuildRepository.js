import build from '../models/build'

const BuildRepository = {
    getByTitle: async (title) => {
      return new Promise((resolve, reject) => {
        build.findOne({ title: title }, (err, build) => {
          if (err) {
            reject(err)
          }
          resolve(build)
        })
      })

    },
    createBuild: (build) => {
      return new Promise((resolve, reject) => {
        const buildModel = new build(build)
        buildModel.save((err, build) => {
            if (err) {
                reject(err)
            }
            resolve(build)
        })
      })

    }
}

export default BuildRepository
