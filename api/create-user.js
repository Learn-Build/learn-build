const User = require('../models/User');

module.exports = (req, res) => {
  const userData = req.body;

  const userModel = new User(userData);

  //  TODO: make sure email is unique

  userModel.save((err, user) => {
    if (err) {
      res.status(400).send(err);
    }

    res.status(200).send(user);
  });
};
