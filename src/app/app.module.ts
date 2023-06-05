import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { NavbarModule } from './navbar/navbar.module'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NavbarModule],
    bootstrap: [AppComponent]
})
export class AppModule {}