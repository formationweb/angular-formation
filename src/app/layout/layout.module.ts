import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UsersModule } from './users/users.module';
import { NavbarModule } from './navbar/navbar.module';
import { UserEditModule } from './user-edit/user-edit.module';
import { layoutRouter } from './layout.router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    NavbarModule,
    UserEditModule,
    layoutRouter
  ]
})
export class LayoutModule { }
