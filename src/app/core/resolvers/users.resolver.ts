import { Observable } from "rxjs";
import { User } from "../interfaces/user";
import { inject } from "@angular/core";
import { UsersService } from "../services/users.service";

export function usersResolver(): Observable<User[]> {
    const usersService = inject(UsersService)
    return usersService.getAll()
}