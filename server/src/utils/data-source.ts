import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
export const AppDataSource = new DataSource({
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'v33219',
    database: 'yaba',
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
});