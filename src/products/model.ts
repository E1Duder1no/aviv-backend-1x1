import {sequelize} from './db'
import {DataTypes} from "sequelize";

const ProductModel = sequelize.define("products", {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
})

export default ProductModel;

