import User from '../models/User'

const UserRepository = {
  getOrCreateByEmailAndName: async function (email, name) {

    const userMaybe = await this.getByEmail(email)

    if (userMaybe !== null) {
      return userMaybe
    } else {
      const userModel = new User({ email, name })
      userModel.save((err, user) => {
        if (err) {
          throw new Error(err)
        }

        return user
      })
    }
  },  
  getByEmail: async function (email) {
    const user = await User.findOne({ email: email }).exec()
    return user
  }
}

export default UserRepository