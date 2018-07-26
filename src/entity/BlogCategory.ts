import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from "typeorm";
import { BlogPost } from "./BlogPost";

@Entity()
export class BlogCategory {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToMany(type => BlogPost, blogPost => blogPost.blogCategories)
    blogPosts: BlogPost[];
}