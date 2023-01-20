import express from 'express';
import dotenv from 'dotenv'
import routes from './routes/Routes_Default';
dotenv.config()

const app = express()

app.use('/', routes)

export default app;