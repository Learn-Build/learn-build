import Build from '../models/build'

const BuildRepository = {
    getByTitle: async (title) => {
      return new Promise((resolve, reject) => {
        Build.findOne({ title: title }, (err, build) => {
          if (err) {
            reject(err)
          }
          resolve(build)
        })
      })

    },
    createBuild: (build) => {
      return new Promise((resolve, reject) => {
        const buildModel = new Build(build)
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
