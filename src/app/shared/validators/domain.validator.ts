import { AbstractControl } from "@angular/forms";

export function domainValidator(domainName: string) {
    return function(input: AbstractControl): { domain: string } | null {
        return (input.value as string).endsWith(domainName) ? { domain: domainName } : null
    }
}