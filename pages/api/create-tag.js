import TagRepository from '../../repositories/TagRepository';
import connect from '../../db/connectToMongo';

export default async function (req, res) {
  await connect();

  try {
    const createdTag = await TagRepository.createTag(req.body);

    res.send(createdTag);
  } catch (e) {
    res.send(e);
  }
}
