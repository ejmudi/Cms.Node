import {NextFunction, Request, Response} from "express";

export class HomeController {

    async index(request: Request, response: Response, next: NextFunction) {
        response.render('Home/index', { title: 'Hello world', message: 'Earth' })
    }

}