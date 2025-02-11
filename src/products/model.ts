import {productsDBConnection} from './db'
import {DataTypes} from "sequelize";
import {ProductInstance} from "./types";

const ProductModel = productsDBConnection.define<ProductInstance>("products", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
})

export default ProductModel;

