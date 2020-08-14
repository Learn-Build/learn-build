import BuildRepository from '../../repositories/BuildRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()

    try {
        const createdBuild = await BuildRepository.createdBuild(req.body)

        res.send(createdBuild);
    } catch(e) {
        res.send(e)
    }

  };
