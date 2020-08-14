import BuildRepository from '../../repositories/BuildRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()

    const title = req.query.title
    console.log('title', title)

    const build = await BuildRepository.getByTitle(title)
    console.log(build);
    res.send(build);
  };
