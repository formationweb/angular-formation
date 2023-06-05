import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}