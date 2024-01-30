import passport from 'passport';

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    req.user = user;
    return next();
  })(req, res, next);
};
