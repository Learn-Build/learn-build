import User from '../models/User';

const UserRepository = {
  async getAll(limit) {
    return new Promise((resolve, reject) => {
      User.find({}, (err, users) => {
        if (err) {
          reject(err);
        }
        resolve(users);
      }).limit(limit);
    });
  },

  async getOrCreateByEmailAndName(email, name) {
    const userMaybe = await this.getByEmail(email);

    if (userMaybe !== null) {
      return userMaybe;
    }
    const userModel = new User({ email, name });
    userModel.save((err, user) => {
      if (err) {
        throw new Error(err);
      }

      return user;
    });
  },
  async getByEmail(email) {
    const user = await User.findOne({ email }).exec();
    return user;
  },
};

export default UserRepository;
