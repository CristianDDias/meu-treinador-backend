import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { loadConfig } from './config';
import { createContainer } from './container';
import { createRouter } from './routes';
import { errorHandler } from './shared/infrastructure/http/middleware/error-middleware';

(async () => {
  const config = loadConfig();
  await createContainer(config);

  const app = express();
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(helmet());
  app.use(cors({ origin: '*' }));
  app.use('/api/v1', createRouter());
  app.use(errorHandler);

  app.listen(config.port, () => {
    console.log(`Server listening on ${config.port}`);
  });
})();
