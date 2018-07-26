import {BlogPostController} from "./controller/BlogPostController";
import {HomeController} from "./controller/HomeController";

export const Routes = [{
    method: "get",
    route: "/",
    controller: HomeController,
    action: "index"
},
    {
    method: "get",
    route: "/users",
    controller: BlogPostController,
    action: "index"
}, {
    method: "get",
    route: "/users/:id",
    controller: BlogPostController,
    action: "edit"
}, {
    method: "post",
    route: "/users",
    controller: BlogPostController,
    action: "addOrUpdate"
}, {
    method: "delete",
    route: "/users",
    controller: BlogPostController,
    action: "delete"
}];