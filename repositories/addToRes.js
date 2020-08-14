import TagRepository from '../../repositories/TagRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()
    
    const title = req.query.title
    const name = req.query.name
    console.log('title', title)
    console.log('name', name)

    await TagRepository.addToResource(name, title)
    
    
  };