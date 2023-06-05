import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule, CommonModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}