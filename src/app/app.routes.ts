import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { MainComponent } from "./layouts/main/main.component";
import { UsersComponent } from "./features/users/users.component";
import { UserEditComponent } from "./pages/user-edit/user-edit.component";
import { usersResolver } from "./core/resolvers/users.resolver";

export const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        resolve: {
            usersList: usersResolver
        },
        children: [
            {
                path: '',
                component: UsersComponent
            },
            {
                path: 'user/:id',
                component: UserEditComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
]