import express from "express";
import productsRoutes from "./products";

const mainRoutes = express.Router({strict: true});

mainRoutes.use('/products', productsRoutes)

export default mainRoutes;