import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'autocomplete',
    standalone: true
})
export class AutoCompletePipe implements PipeTransform {
    transform(firstNames: string[], str: string): string[] {
        return firstNames.filter(name => name.startsWith(str))
    }
}