import GoogleStrategy from 'passport-google-oauth20'
import passport from 'passport'
import User from './models/User'


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      callbackURL: `http://localhost/auth/google/callback`
    },
    function (accessToken, refreshToken, profile, cb) {
      const {
        _json: { id, avatar_url, login: name, email }
      } = profile
      try {
        const user = await User.findOne({ email: email })
        //동일한 이메일을 가졌을 때는 이미 가입중인 사용자라면 바로 로그인하도록 아니라면 신규 사용자 생성
        if (user) {
          user.githubId = id
          user.save()
          return cb(null, user)
        } else {
          const newUser = await User.create({
            email,
            name,
            githubId: id,
            avatarUrl: avatar_url
          })
          return cb(null, newUser)
        }
      } catch (error) {
        return cb(error)
      }
    }
  )
)