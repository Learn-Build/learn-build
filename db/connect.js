const mongoose = require("mongoose");

module.exports = () => {
  const connectionString = process.env.MONGO_URI;

  mongoose.connect(connectionString, { useNewUrlParser: true });

  return mongoose;
};
