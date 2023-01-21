import express from 'express';
import dotenv from 'dotenv'
import routes from './routes/Routes_Default';
import bodyParser from 'body-parser';
dotenv.config()

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

export default app;