import TagRepository from '../../repositories/TagRepository';
import connect from '../../db/connectToMongo';

export default async function (req, res) {
  await connect();

  const { _limit } = req.query;

  const limit = parseInt(_limit, 10);
  const tags = await TagRepository.getAll(limit);
  res.send(tags);
}
