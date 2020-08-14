import TagRepository from '../../repositories/TagRepository';
import connect from '../../db/connectToMongo';

export default async function (req, res) {
  await connect();

  const { _id } = req.query;

  const tag = await TagRepository.getById(_id);
  res.send(tag);
}
