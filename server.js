import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import db from './db/mongoose.js';
import routes from './routes/routers.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes)


app.listen(port, () =>  console.log(`Sever up on port ${port}`));

