import express, { Request, Response } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

import * as userController from './controllers/userControllers.js';

const generateToken = (user: any) => {
  return jwt.sign({ id: user.id, username: user.username }, process.env.SECRET, { expiresIn: '1h' });
};

router.post('/users/signup', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const newUser = await userController.create(username, password);

    res.status(201).json({ msg: 'Signup successful. Now you can log in.' });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/users/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await userController.authenticate(username, password);

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const token = generateToken(user);

    res.json({ token, id: user.id, username: user.username });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
