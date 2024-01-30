const express = require('express');
const passport = require('passport');
const { create, readAll, readOne, update, del } = require('./usersController');
const db = require('./database');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(passport.initialize());

app.post('/users', create);
app.get('/users', passport.authenticate('jwt', { session: false }), readAll);
app.get('/users/:id', passport.authenticate('jwt', { session: false }), readOne);
app.put('/users/:id', passport.authenticate('jwt', { session: false }), update);
app.delete('/users/:id', passport.authenticate('jwt', { session: false }), del);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
