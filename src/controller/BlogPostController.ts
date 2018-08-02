import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { BlogPost } from "../entity/BlogPost";
import { FeaturedImage } from "../entity/FeaturedImage";
import { BlogComment } from "../entity/BlogComment";
import { BlogCategory } from "../entity/BlogCategory";

interface BlogPostRequest extends Request {
    params: BlogPost;
}

export class BlogPostController {

    //i was able to use blogRepository to save a featured image, bcos they have the same name ppty perhaps?
    private blogPostRepository = getRepository(BlogPost);
    private featuredImageRepository = getRepository(FeaturedImage);
    private blogCommentRepository = getRepository(BlogComment);
    private blogCategoryRepository = getRepository(BlogCategory);

    // => "/"
    async index(request: Request, response: Response, next: NextFunction) {
        return this.blogPostRepository.find();

        //possible find options here:
        // this.blogRepository.find({ 
        //     select: ["firstName", "lastName"],
        //     relations: ["profile", "photos", "videos"],
        //     where: { 
        //         firstName: "Timber", 
        //         lastName: "Saw" 
        //     },
        //     order: {
        //         name: "ASC",
        //         id: "DESC"
        //     },
        //     skip: 5,
        //     take: 10,
        //     cache: true
        // });
    }

    // => "/id"
    async view(request: BlogPostRequest, response: Response, next: NextFunction) {
        return this.blogPostRepository.findOne(request.params.id);
    }

    // => "/edit/id/newname"
    async edit(request: BlogPostRequest, response: Response, next: NextFunction) {
        const blog = await this.blogPostRepository.findOne(request.params.id);
        blog.name = request.params.name;
        return this.blogPostRepository.save(blog);
    }

    // => "/addOrUpdate/name"
    async addOrUpdate(request: BlogPostRequest, response: Response) {
        //return await this.blogRepository.save(request.body); 

        const featuredImage = { name: `${request.params.name}.png` } as FeaturedImage;
        await this.featuredImageRepository.save(featuredImage);

        const blogComment = { name: `blogComment: ${request.params.name}` } as BlogComment;
        await this.blogCommentRepository.save(blogComment);

        const blogCategory = { name: `blogCategory: ${request.params.name}` } as BlogCategory;
        await this.blogCategoryRepository.save(blogCategory);

        //save blogPost
        const blogPost = {
            name: request.params.name,
            featuredImage,
            blogComments: [blogComment],
            blogCategories: [blogCategory]
        } as BlogPost;

        return await this.blogPostRepository.save(blogPost);
    }

    // => "/delete/id"
    async delete(request: BlogPostRequest, response: Response, next: NextFunction) {
        return await this.blogPostRepository.delete(request.params.id);
    }

    async deleteAll(request: BlogPostRequest, response: Response, next: NextFunction) {
        return await this.blogPostRepository.clear();
    }

}