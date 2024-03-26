import { Routes } from "@angular/router";
import { LayoutComponent } from "./pages/layout/layout.component";
import { LoginComponent } from "./pages/login/login.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]