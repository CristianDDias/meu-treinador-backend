import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { loadConfig } from './src/config';

const config = loadConfig();

export default [{ ...config.database } as PostgresConnectionOptions];
