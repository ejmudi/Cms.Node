import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {BlogPost} from "../entity/BlogPost";

export class BlogPostController {

    private blogRepository = getRepository(BlogPost);

    async index(request: Request, response: Response, next: NextFunction) {
        return this.blogRepository.find();
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.blogRepository.findOne(request.params.id);
    }

    async addOrUpdate(request: Request, response: Response, next: NextFunction) {
        return this.blogRepository.save(request.body);
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        //await this.userRepository.//.removeById(request.params.id);
    }

}