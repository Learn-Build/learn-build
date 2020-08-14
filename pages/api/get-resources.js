import ResourceRepository from '../../repositories/ResourceRepository';
import connect from '../../db/connectToMongo';

export default async function (req, res) {
  await connect();

  const { _limit } = req.query;

  const limit = parseInt(_limit, 10);
  const resources = await ResourceRepository.getAll(limit);
  res.send(resources);
}
