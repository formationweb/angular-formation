import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar.component";
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [NavbarComponent, SearchComponent],
    imports: [FormsModule, CommonModule, SharedModule, RouterModule],
    exports: [NavbarComponent]
})
export class NavbarModule {}