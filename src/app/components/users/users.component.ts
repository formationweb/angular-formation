import { Component, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { UserCardComponent } from "./user-card.component";
import { User } from "../../core/interfaces/user";
import { LoaderComponent } from "../../atomics/loader/loader.component";
import { AlphaRangeComponent } from "../../atomics/alpha-range/alpha-range.component";
import { PluralPipe } from "../../pipes/plural.pipe";
import { FormsModule, NgForm } from "@angular/forms";
import { ExtensionPipe } from "../../pipes/extension.pipe";
import { UserService } from "../../core/services/user.service";
import { interval, Subscription } from "rxjs";

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
export class UsersComponent implements OnInit, OnDestroy {
    private userService = inject(UserService)
    users = this.userService.users
    loading = signal(true)
    loadingCreate = signal(false)
    opacity = 0.5
    extensions: string[] = ['tv', 'biz', 'io', 'me']
    extensionSelected = signal('')
    subscription!: Subscription

    ngOnInit() {
      this.userService.getAll().subscribe(() => {
        this.loading.set(false)
      })
      this.subscription = interval(1000).subscribe(console.log)
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }

    listenOpacity(opacity: number) {
      //console.log(opacity)
    }

    deleteUser(id: number) {
      this.userService.delete(id).subscribe()
    }

    createUser(myForm: NgForm) {
      if (myForm.invalid) return
      this.loadingCreate.set(true)
      this.userService.create(myForm.value).subscribe(() => {
        this.loadingCreate.set(false)
        myForm.resetForm()
      })
    }
}