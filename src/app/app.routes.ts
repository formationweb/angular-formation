import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Users } from "./users/users";
import { Main } from "./layouts/main";
import { UserEdit } from "./user-edit/user-edit";

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Main,
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
    }
]