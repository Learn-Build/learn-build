import ResourceRepository from '../../repositories/ResourceRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()

    try {
        const createdResource = await ResourceRepository.createResource(req.body)

        res.send(createdResource);
    } catch(e) {
        res.send(e)
    }

  };