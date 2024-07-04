import { UserController } from "./controller/UserController"
import { QuestaoController } from "./controller/QuestaoController"

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},{
    method: "get",
    route: "/RECUPERAquestoes",
    controller: QuestaoController,
    action: "all"
}, {
    method: "get",
    route: "/time/:id",
    controller: QuestaoController,
    action: "one"
}, {
    method: "post",
    route: "/time",
    controller: QuestaoController,
    action: "save"
}, {
    method: "delete",
    route: "/time/:id",
    controller: QuestaoController,
    action: "remove"
}]