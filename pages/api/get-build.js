import BuildRepository from '../../repositories/BuildRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()

    const _id = req.query._id
    console.log('id', _id)

    const build = await BuildRepository.getById(_id)
    console.log(build);
    res.send(build);
  };
