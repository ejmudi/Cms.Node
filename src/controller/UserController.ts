import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";

export class UserController {

    private userRepository = getRepository(User);

    async index(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async edit(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async addOrUpdate(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async delete(request: Request, response: Response, next: NextFunction) {
        //await this.userRepository.//.removeById(request.params.id);
    }

}