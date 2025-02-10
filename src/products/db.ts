import {Sequelize} from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/products/database.sqlite'
});

export const connectDB = async () => {
    try {
        await sequelize.sync();
        await sequelize.authenticate();
        console.log("Connected to database");
    } catch (e) {
        console.error("Failed to connect to database", e);
    }
};