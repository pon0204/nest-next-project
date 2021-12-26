import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DATABASE_SCHEMA,
  entities: ['apps/app/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: true,
};

export default config;
