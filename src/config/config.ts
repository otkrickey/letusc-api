import dotenv from 'dotenv';
import logging from './logging';

dotenv.config();

const dotenv_error = (name: string, defaultValue?: string): string => { logging.error('dotenv', `Please Specify ${name}`); return defaultValue ?? 'error'; };



// const MONGO_URL = process.env.MONGO_URL ?? dotenv_error('MONGO_URL');
// const MONGO_USERNAME = process.env.MONGO_USERNAME ?? dotenv_error('MONGO_USERNAME');
// const MONGO_PASSWORD = process.env.MONGO_PASSWORD ?? dotenv_error('MONGO_PASSWORD');
// const MONGO_OPTIONS = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     poolSize: 50,
//     autoIndex: false,
//     retryWrites: false
// };

// const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME ?? dotenv_error('SERVER_HOSTNAME');
const SERVER_PORT = process.env.PORT ?? dotenv_error('PORT');
// const HOST_DIR = process.env.HOST_DIR ?? dotenv_error('HOST_DIR');

// const GOOGLE_CLOUD_CLIENT_ID = process.env.GOOGLE_CLOUD_CLIENT_ID ?? dotenv_error('GOOGLE_CLOUD_CLIENT_ID');
// const GOOGLE_CLOUD_CLIENT_SECRET = process.env.GOOGLE_CLOUD_CLIENT_SECRET ?? dotenv_error('GOOGLE_CLOUD_CLIENT_SECRET');
// const GOOGLE_CLOUD_CALLBACK_URL = process.env.GOOGLE_CLOUD_CALLBACK_URL ?? dotenv_error('GOOGLE_CLOUD_CALLBACK_URL');

// const MONGO = {
//     host: MONGO_URL,
//     username: MONGO_USERNAME,
//     password: MONGO_PASSWORD,
//     options: MONGO_OPTIONS,
//     url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_URL}`,
// };

const SERVER = {
    // hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
    // hostDir: HOST_DIR,
};

// const GOOGLE_CLOUD = {
//     clientID: GOOGLE_CLOUD_CLIENT_ID,
//     clientSecret: GOOGLE_CLOUD_CLIENT_SECRET,
//     callbackUrl: GOOGLE_CLOUD_CALLBACK_URL,
// }

const config = {
    // mongo: MONGO,
    server: SERVER,
    // google: GOOGLE_CLOUD,
};

export default config;