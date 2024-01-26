import express from 'express';
import Joi from 'joi';
import * as planetController from './controllers/planet';

const planetRouter = express.Router();

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

planetRouter.get('/api/planets', planetController.getAll);
planetRouter.get('/api/planets/:id', planetController.getOneById);
planetRouter.post('/api/planets', planetController.create);
planetRouter.put('/api/planets/:id', planetController.updateById);
planetRouter.delete('/api/planets/:id', planetController.deleteById);

export default planetRouter;
