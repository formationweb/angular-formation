import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { UsersComponent } from "./users/users.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
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
    }
]

export const layoutRouter = RouterModule.forChild(routes)