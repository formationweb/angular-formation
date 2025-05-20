import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
    transform(names: string[], searchValue: string): string[] {
        return names.filter(name => name.startsWith(searchValue))
    }
}