import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './entity/User';
import { CreateDB1660215207912 } from './migration/1660215207912-CreateDB';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: false,
  logging: false,
  entities: [User],
  migrations: [CreateDB1660215207912],
  subscribers: [],
});
