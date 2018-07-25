import {UserController} from "./controller/UserController";
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
    controller: UserController,
    action: "index"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "edit"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "addOrUpdate"
}, {
    method: "delete",
    route: "/users",
    controller: UserController,
    action: "delete"
}];