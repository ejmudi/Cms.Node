import {Entity, PrimaryGeneratedColumn, Column, JoinTable, OneToOne, OneToMany, ManyToMany, JoinColumn} from "typeorm";
import { BlogComment } from "./BlogComment";
import { BlogCategory } from "./BlogCategory";
import { FeaturedImage } from "./FeaturedImage";

@Entity()
export class BlogPost {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @OneToOne(type => FeaturedImage)
    @JoinColumn()
    featuredImage: FeaturedImage;
    
    @OneToMany(type => BlogComment, blogComment => blogComment.blogPost)
    blogComments: BlogComment[];

    @ManyToMany(type => BlogCategory, blogCategory => blogCategory.blogPosts)
    @JoinTable()
    blogCategories: BlogCategory[];

}
