import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { MainLayout } from "./layouts/main";

export const routes: Routes = [{
    path: 'login',
    component: Login
}, {
    path: '',
    component: MainLayout
}]