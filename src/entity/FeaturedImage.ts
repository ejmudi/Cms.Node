import {Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToMany, ManyToMany} from "typeorm";

@Entity()
export class FeaturedImage {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
