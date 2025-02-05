import http from 'node:http';
import app from './app';
import config from './config';

const webServer = http.createServer(app);

try {
    webServer.listen(config.SERVER_PORT, () => {
        console.info(`Server is running on http://localhost:${config.SERVER_PORT}`)
    });
} catch (error) {
    console.error({error});
    webServer.close();
}

export default webServer;