import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { UsersModule } from './users/users.module';
import { NavbarModule } from './navbar/navbar.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    NavbarModule
  ]
})
export class LayoutModule { }
