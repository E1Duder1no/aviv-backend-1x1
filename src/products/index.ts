import express from "express";
import productsController from './controller';

const productsRoutes = express.Router({strict: true});

productsRoutes.get('/', productsController.getAll)
productsRoutes.get('/:id', productsController.getOne)

productsRoutes.post('/', productsController.createOne)

productsRoutes.put('/:id', productsController.updateOne)

productsRoutes.delete('/:id', productsController.deleteOne)

export default productsRoutes;