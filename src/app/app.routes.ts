import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Main } from "./layouts/main/main";

export const routes: Routes = [
    {
        path: '',
        component: Main
    },
    {
        path: 'login',
        component: Login
    }
]