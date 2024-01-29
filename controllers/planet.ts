import { Request, Response } from 'express';

const db = require('path/to/your/database/configuration');

export const getAll = async (req: Request, res: Response) => {
  const planets = await db.any('SELECT * FROM planets');
  res.status(200).json(planets);
};

export const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.one('SELECT * FROM planets WHERE id = $1', [id]);
  res.status(200).json(planet);
};

export const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  await db.none('INSERT INTO planets (name) VALUES ($1)', [name]);
  res.status(201).json({ msg: 'The planet was created' });
};

export const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none('UPDATE planets SET name = $1 WHERE id = $2', [name, id]);
  res.status(200).json({ msg: 'The planet was updated.' });
};

export const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none('DELETE FROM planets WHERE id = $1', [id]);
  res.status(200).json({ msg: 'The planet was deleted.' });
};
