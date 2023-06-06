import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { LoginModule } from './login/login.module'
import { appRouter } from './app.router'
import { LayoutModule } from './layout/layout.module'
import { AppService } from './core/services/app.service'

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, LoginModule, LayoutModule, appRouter],
    bootstrap: [AppComponent],
    providers: [AppService]
})
export class AppModule {}