const express = require("express");
require("express-async-errors");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

type Planet = {
   id: number;
   name: string;
}

type Planets = Planet[];

let planets = [
   {id:1, name: "Earth"},
   {id:2, name: "Mars"},
];

app.get("/api/planets", (request, response) => {
   response.status(200).json(planets);
});

app.get("/api/planets/:id", (request, response) => {
   const { id } = request.params
   const planet = planets.find(p => p.id === Number(id))

   response.status(200).json(planet);
});

app.post("/api/planets", (request, response) => {
   const {id, name} = request.body;
   const newPlanet = {id, name}
   planets = [...planets, newPlanet]

   response.status(201).json({ msg: "Theplanet was created" });
});

app.put("/api/planets/:id", (request, response) => {
   const {id} = request.params
   const {name} = request.body
   planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p)

   console.log(planets);

   response.status(200).json({ msg: "The planet was updated." })
});

app.delete("/api/planets/:id", (request, response) => {
   const {id} = request.params
   planets = planets.filter(p => p.id !== Number(id))

   response.status(200).json({ msg: "The planet was deleted." })
})

app.listen(port, () => {
   console.log(`Example app listening on port http://localhost:${port}`);
});
