import Resource from '../models/Resource'

const ResourceRepository = {
    getByTitle: async (title) => {
        const resource = await Resource.findOne({ title }).exec()
        return resource
    },
}

export default ResourceRepository
