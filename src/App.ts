import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import mongoose from 'mongoose';
import routes from './routes/routes';

const app = express()

const mongoURI =
    (process.env.PROD ? process.env.MONGODB_URL : process.env.MONGODB_URL_TEST) || '';
// console.log('mongo attempt', mongoURI);
mongoURI &&
    mongoose
        .connect(mongoURI)
        // .then(() => console.log('MongoDB connected...'))
        .catch((err: any) => console.log(err));

app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded())
app.use(morgan('dev'));
app.use(routes)

export { app }