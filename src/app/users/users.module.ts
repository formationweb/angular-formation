import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [UsersComponent, UserCardComponent],
    imports: [CommonModule, SharedModule, FormsModule],
    exports: [UsersComponent]
})
export class UsersModule {}