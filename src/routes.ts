import {BlogPostController} from "./controller/BlogPostController";
import {HomeController} from "./controller/HomeController";

export const Routes = [{
    method: "get",
    route: "/",
    controller: HomeController,
    action: "index"
},
    {
    method: "get",//http methods
    route: "/blogs",
    controller: BlogPostController,
    action: "index"
}, {
    method: "get",
    route: "/blogs/:id",
    controller: BlogPostController,
    action: "view"
}, {
    method: "get",
    route: "/blogs/edit/:id/:name",
    controller: BlogPostController,
    action: "edit"
}, {
    method: "get",
    route: "/blogs/addOrUpdate/:name",
    controller: BlogPostController,
    action: "addOrUpdate"
}, {
    method: "get",
    route: "/blogs/:id",
    controller: BlogPostController,
    action: "delete"
},{
    method: "get",
    route: "/blogs",
    controller: BlogPostController,
    action: "deleteAll"
}];