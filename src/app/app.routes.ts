import { Routes } from "@angular/router";
import { Users } from "./features/users/users";
import { Login } from "./pages/login/login";

export const routes: Routes = [
    {
        path: '',
        component: Users
    },
    {
        path: 'login',
        component: Login
    }
]