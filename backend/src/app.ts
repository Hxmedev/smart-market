import express, { Application } from 'express';
import cors from 'cors';
import productsRouter from './routes/productsRoutes';

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productsRouter);

export default app;
