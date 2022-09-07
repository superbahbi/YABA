import { PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, UpdateDateColumn } from "typeorm";

export default abstract class Mode extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @CreateDateColumn()
    createAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}