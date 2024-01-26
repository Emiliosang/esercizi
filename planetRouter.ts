import express from 'express';
import * as Joi from 'joi';

const app = express();
const port = 3000;
const planetRouter = express.Router();

app.use(express.json());
app.use(planetRouter);

type Planet = {
    id: number;
    name: string;
};

type Planets = Planet[];

let planets: Planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' },
];

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

planetRouter.get('/api/planets', (req, res) => {
  res.status(200).json({ msg: "The planet was created", planet: planets });
});

planetRouter.get('/api/planets/:id', (req, res) => {
  const { id } = req.params
  const planet = planets.find(p => p.id === Number(id))

  res.status(200).json(planet);
});

planetRouter.post('/api/planets', (req, res) => {
  const {id, name} = req.body;
  const newPlanet = {id, name}
  planets = [...planets, newPlanet]

  res.status(201).json({ msg: "Theplanet was created" });
});

planetRouter.put('/api/planets/:id', (req, res) => {
  const {id} = req.params
  const {name} = req.body
  planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p)

  console.log(planets);

  res.status(200).json({ msg: "The planet was updated." })
});

planetRouter.delete('/api/planets/:id', (req, res) => {
  const {id} = req.params
  planets = planets.filter(p => p.id !== Number(id))

  res.status(200).json({ msg: "The planet was deleted." })
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
