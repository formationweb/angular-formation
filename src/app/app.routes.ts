import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { MainLayout } from "./layouts/main";
import { Users } from "./users/users";
import { UserEdit } from "./user-edit/user-edit";

export const routes: Routes = [{
    path: 'login',
    component: Login
}, {
    path: '',
    component: MainLayout,
    children: [
        {
            path: '',
            component: Users
        },
        {
            path: 'user/:id',
            component: UserEdit
        }
    ]
}]