import express, { Express } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRoutes from './routes/auth.routes';

const app: Express = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(authRoutes);

export default app;
