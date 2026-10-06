import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Users } from "./users/users";
import { Main } from "./layouts/main";

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        component: Main
    }
]