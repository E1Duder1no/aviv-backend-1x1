import http from 'node:http';
import app from './app';
import config from './config';
import {productsDB} from "./products/db";

const webServer = http.createServer(app);

(async () => {
    try {
        await productsDB.$connect()
        webServer.listen(config.SERVER_PORT, () => {
            console.info(`Server is running on http://localhost:${config.SERVER_PORT}`)
        });
    } catch (error) {
        console.error({error});
        await productsDB.$close()
        webServer.close();
    }
})()


export default webServer;