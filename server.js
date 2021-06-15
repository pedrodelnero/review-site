import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from './routes/routers.js';
import { connect } from './db/mongoose.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
connect();

const corsOptions = {
  origin: ['http://localhost:3000', 'https://delnero-review-site.netlify.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => console.log(`Sever is connected in ${PORT}`));

export default app;
