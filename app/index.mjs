import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.json());
app.use(morgan('dev'));

const PORT = process.env.PORT;

export const planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];
app.get('/', (req, res) => {
    res.send(planets);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
