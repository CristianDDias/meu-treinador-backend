import dotenv from 'dotenv';

export interface Config {
  port: number;
  database: {
    type: 'postgres';
    url: string;
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
      url: String(process.env.DATABASE_URL),
      entities: [`**/infrastructure/entity/*.${fileExtension}`],
      migrations: [`**/infrastructure/migration/*.${fileExtension}`],
      logging: process.env.DATABASE_LOGGING === 'true',
    },
  };
};
