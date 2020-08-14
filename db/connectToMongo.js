const mongoose = require('mongoose');

module.exports = async () => {
  if (mongoose.connections[0].readyState) return;

  const connectionString = process.env.MONGO_URI;

  await mongoose.connect(connectionString, { useNewUrlParser: true });
};