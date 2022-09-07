import {
    Entity,
    Column,
} from "typeorm";
import Model from "./mode.entity";
@Entity()
export class User extends Model {
    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    static async comparePassword(
        candidatePassword: string,
        userPassword: string
    ) {
        // TODO - implement password hashing with argon2
        return candidatePassword === userPassword;
    }
    toJSON() {
        return {
            ...this,
            password: undefined,
        };
    }
}