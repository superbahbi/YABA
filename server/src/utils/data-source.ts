import "dotenv/config";
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
export const AppDataSource = new DataSource({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});