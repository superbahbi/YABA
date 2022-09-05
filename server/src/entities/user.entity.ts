import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
} from "typeorm";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

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