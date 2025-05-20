import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { MainComponent } from "./layouts/main/main.component";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]