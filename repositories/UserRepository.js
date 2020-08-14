import User from '../models/User'

class UserRepository {
  getOrCreateByEmailAndName(email, name) {
    // const userMaybe = getByEmail(email)
    // if (userMaybe !== null) {
    //   return userMaybe
    // } else {
    //   const userModel = new User({ email, name })
    //   userModel.save((err, user) => {
    //     if (err) {
    //       throw new Error(err)
    //     }

    //     return user
    //   })
    // }
  }

  // async getByEmail(email) {
  //   const user = await User.findOne({ email: email }).exec()
  //   return user
  // }
}

export default new UserRepository()