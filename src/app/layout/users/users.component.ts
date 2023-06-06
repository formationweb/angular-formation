import { Component, OnInit } from "@angular/core";
import { User } from "src/app/core/interfaces/user";
import { UserService } from "src/app/core/services/user.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    nbSelected: number = 0
    extSelected: string = ''
    extensions: string[] = ['tv', 'biz', 'io', 'me']
    users: User[] = []

    constructor(private userService: UserService) { }

    ngOnInit(): void {
       this.users = this.userService.getAll()
    }
}