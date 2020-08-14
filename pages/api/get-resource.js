import ResourceRepository from '../../repositories/ResourceRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()
    
    const title = req.query.title
    console.log('title', title)

    const resource = await ResourceRepository.getByTitle(title)
    console.log(resource)
    res.send(resource);
  };