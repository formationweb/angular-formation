import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'autocomplete'
})
export class AutocompletePipe implements PipeTransform {
  transform(firstNames: string[], str: string): string[] {
    return firstNames.filter(name => name.startsWith(str))
  }
}
