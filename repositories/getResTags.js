import TagRepository from '../../repositories/TagRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()
    
    const title = req.query.title
    console.log('title', title)

    const theTags = await TagRepository.getResTag(title)
    console.log(theTags)
    res.send(theTags);
  };