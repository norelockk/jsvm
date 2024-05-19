import express from 'express';
import apiRouter from './routes/Api';
import path from 'path';

const app = express();

app.use(express.json({
  limit: "1mb"
}));

app.use('/api', apiRouter);

app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.listen(3000);