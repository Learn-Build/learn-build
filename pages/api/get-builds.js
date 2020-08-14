import BuildRepository from '../../repositories/BuildRepository';
import connect from '../../db/connectToMongo';

export default async function (req, res) {
  await connect();

  const { _limit } = req.query;

  const limit = parseInt(_limit, 10);
  const builds = await BuildRepository.getAll(limit);
  res.send(builds);
}
