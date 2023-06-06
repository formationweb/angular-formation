import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

export const appRouter = RouterModule.forRoot(routes)