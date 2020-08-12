import connect from '../db/connect';

module.exports = (req, res) => {
  const db = connect().connection;

  db.on('error', () => {
    res.send('MongoDB connection error.');
  });
  db.once('open', () => {
    res.send('MongoDB connected.');
  });
};
