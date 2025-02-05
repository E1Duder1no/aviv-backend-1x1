    import process from 'node:process';
    import dotenv from "dotenv";

    const nodeEnv = process.env.NODE_ENV || 'development';

    const envMap: Record<string, string> = {
        test: '.env.test',
        development: '.env.development',
        production: '.env.production',
        staging: '.env.staging',
    }

    const envFile = envMap[nodeEnv];

    const dotenvConfig = dotenv.config({
        path: envFile,
    });

    if (dotenvConfig.error) {
        throw new Error(dotenvConfig.error.message);
    }

    if (!dotenvConfig.parsed) {
        throw new Error('Cannot parse dotenv config');
    }

    const config = {
        SERVER_PORT: parseInt(dotenvConfig.parsed.SERVER_PORT || '8080', 10),
        SERVER_API_PREFIX: dotenvConfig.parsed.SERVER_API_PREFIX,
        SERVER_API_VERSION: parseInt(dotenvConfig.parsed.SERVER_API_VERSION || '1', 10),
    }

    export default config;