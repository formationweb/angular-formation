import { Routes } from "@angular/router";
import { UsersComponent } from "./components/users/users.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: '/login',
        component: LoginComponent
    }
]