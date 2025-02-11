import {Sequelize} from "sequelize";

export const productsDBConnection = new Sequelize({
    dialect: 'sqlite',
    storage: './src/products/database.sqlite'
});

export const productsDB = {
    $connect : async () => {
        try {
            await productsDBConnection.sync();
        } catch (e) {
            console.error("Failed to connect to products database", e);
        }
    },
    $close: async () => {
        await productsDBConnection.close();
        console.info("Closing connection to products database.");
    },
    connection: productsDBConnection
};