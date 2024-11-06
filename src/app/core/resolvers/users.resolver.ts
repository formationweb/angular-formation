import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "../services/user.service";
import { User } from "../interfaces/user";

export function usersResolver(): Observable<User[]> {
    const userService = inject(UserService)
    return userService.getAll()
}