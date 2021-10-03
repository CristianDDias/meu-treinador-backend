import dotenv from 'dotenv';

export interface Config {
  port: number;
  database: {
    type: 'postgres';
    host: string;
    port: number;
    username: string;
    password: string;
    entities: string[];
    migrations: string[];
    logging: boolean;
  };
}

export const loadConfig = (): Config => {
  const isProduction = process.env.NODE_ENV === 'production';
  if (!isProduction) {
    dotenv.config();
  }

  const fileExtension = isProduction ? 'js' : 'ts';
  return {
    port: Number(process.env.PORT),
    database: {
      type: 'postgres',
      host: String(process.env.DATABASE_HOST),
      port: Number(process.env.DATABASE_PORT),
      username: String(process.env.DATABASE_USERNAME),
      password: String(process.env.DATABASE_PASSWORD),
      entities: [`**/infrastructure/entity/*.${fileExtension}`],
      migrations: [`**/infrastructure/migration/*.${fileExtension}`],
      logging: process.env.DATABASE_LOGGING === 'true',
    },
  };
};
