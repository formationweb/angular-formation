import { Component, inject, OnInit, signal } from "@angular/core";
import { UserCardComponent } from "./user-card.component";
import { User } from "../../core/interfaces/user";
import { LoaderComponent } from "../../atomics/loader/loader.component";
import { AlphaRangeComponent } from "../../atomics/alpha-range/alpha-range.component";
import { PluralPipe } from "../../pipes/plural.pipe";
import { FormsModule } from "@angular/forms";
import { ExtensionPipe } from "../../pipes/extension.pipe";
import { UserService } from "../../core/services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    imports: [
      UserCardComponent, 
      LoaderComponent, 
      AlphaRangeComponent, 
      PluralPipe,
      FormsModule,
      ExtensionPipe
    ]
})
export class UsersComponent implements OnInit {
    private userService = inject(UserService)
    users = this.userService.users
    loading = signal(true)
    opacity = 0.5
    extensions: string[] = ['tv', 'biz', 'io', 'me']
    extensionSelected = signal('')

    ngOnInit() {
      this.userService.getAll().subscribe(() => {
        this.loading.set(false)
      })
    }

    listenOpacity(opacity: number) {
      //console.log(opacity)
    }

    deleteUser(id: number) {
      console.log(id)
    }
}