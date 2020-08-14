import ResourceRepository from '../../repositories/ResourceRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()
    
    const _id = req.query._id
    console.log('id', _id)

    const resource = await ResourceRepository.getById(_id)
    console.log(resource)
    res.send(resource);
  };