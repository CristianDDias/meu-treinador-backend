import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { createContainer } from './container';
import { createRouter } from './routes';
import { errorHandler } from './shared/infrastructure/http/middleware/error-middleware';

// TODO: Create object or interface ("config.ts") and add it to the container object
dotenv.config();

createContainer();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use('/api/v1', createRouter());
app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server listening');
});
