import auth0 from '../../utils/auth0'

export default auth0.requireAuthentication(async function (req, res) {
  const { user } = await auth0.getSession(req)

  res.send('Hello ' + user.given_name)
})
