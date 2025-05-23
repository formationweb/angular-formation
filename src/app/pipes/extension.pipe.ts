import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../core/interfaces/user";

@Pipe({
    name: 'extFilter'
})
export class ExtensionPipe implements PipeTransform {
    transform(users: User[], ext: string): User[] {
        if (!ext) {
            return users
        }
        return users.filter(user => user.email.endsWith(ext))
    }
}