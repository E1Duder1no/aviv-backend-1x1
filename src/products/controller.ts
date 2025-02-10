import {RequestHandler} from "express";
import productsService from "./service";

interface IProductsController {
    getAll: RequestHandler;
    getOne: RequestHandler;
    createOne: RequestHandler;
    updateOne: RequestHandler;
    deleteOne: RequestHandler;
}

const productsController: IProductsController = {
    getAll: async (req, res) => {
        const response = await productsService.findAll();
        res.status(200).json(response);
    },
    getOne: async (req, res) => {
        const response = await productsService.findById(req.params.id);
        res.status(200).json(response);
    },
    createOne: async (req, res) => {
        const response = await productsService.create(req.body);
        res.status(201).json(response);
    },
    updateOne: async (req, res) => {
        await productsService.updateById(req.params.id, req.body);
        const updatedProduct = productsService.findById(req.params.id);
        res.status(204).json(updatedProduct);
    },
    deleteOne: async (req, res) => {
        await productsService.deleteById(req.params.id);
        res.status(204).send();
    },
}

export default productsController;