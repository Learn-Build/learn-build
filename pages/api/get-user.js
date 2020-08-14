import UserRepository from '../../repositories/UserRepository'
import connect from '../../db/connectToMongo'

export default async function(req, res) {
    await connect()
    
    const email = req.query.email
    console.log('email', email)

    const user = await UserRepository.getByEmail(email)
    console.log(user)
    res.send(user);
  };