import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { BlogPost } from "./BlogPost";

@Entity()
export class BlogComment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @ManyToOne(type => BlogPost, blogPost => blogPost.blogComments)
    blogPost: BlogPost;
}
