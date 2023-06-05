import { NgModule } from "@angular/core";
import { UsersComponent } from "./users.component";
import { UserCardComponent } from "./user-card/user-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [UsersComponent, UserCardComponent],
    imports: [CommonModule],
    exports: [UsersComponent]
})
export class UsersModule {}