import UserRepository from '../../repositories/UserRepository';
import connect from '../../db/connectToMongo';

export default async function (req, res) {
  await connect();

  const { _limit } = req.query;

  const limit = parseInt(_limit, 10);
  const users = await UserRepository.getAll(limit);
  res.send(users);
}
