import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'autocomplete'
})
export class AutoCompletePipe implements PipeTransform {
    transform(names: string[], str: string): string[] {
        if (!str) {
            return []
        }
        return names.filter(name => name.startsWith(str))
    }
}