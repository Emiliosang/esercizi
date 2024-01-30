import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.SECRET;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret,
};

passport.use(
    new Strategy(opts, async (payload, done) => {
        try {
          const user = await db.one('SELECT * FROM users WHERE id = $1', [payload.userId]);

          if (!user) {
            return done(null, false);
          }
          return done(null, user);
        } catch (error) {
          return done(error, false);
        }
      }));
