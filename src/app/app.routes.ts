import { Routes } from "@angular/router";
import { Login } from "./pages/login/login";
import { Main } from "./layouts/main/main";
import { Users } from "./features/users/users";
import { UserEdit } from "./pages/user-edit/user-edit";

export const routes: Routes = [
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
    },
    {
        path: 'login',
        component: Login
    }
]