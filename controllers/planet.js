"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.updateById = exports.create = exports.getOneById = exports.getAll = void 0;
let planets = [
    { id: 1, name: 'Earth' },
    { id: 2, name: 'Mars' },
];
const getAll = (req, res) => {
    res.status(200).json(planets);
};
exports.getAll = getAll;
const getOneById = (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id));
    res.status(200).json(planet);
};
exports.getOneById = getOneById;
const create = (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];
    res.status(201).json({ msg: 'The planet was created' });
};
exports.create = create;
const updateById = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    planets = planets.map((p) => (p.id === Number(id) ? Object.assign(Object.assign({}, p), { name }) : p));
    res.status(200).json({ msg: 'The planet was updated.' });
};
exports.updateById = updateById;
const deleteById = (req, res) => {
    const { id } = req.params;
    planets = planets.filter((p) => p.id !== Number(id));
    res.status(200).json({ msg: 'The planet was deleted.' });
};
exports.deleteById = deleteById;
