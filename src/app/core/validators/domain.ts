import { AbstractControl } from "@angular/forms";

export function domainValidator(domainName: string) {
    return function(control: AbstractControl<string>): { domain: string } | null {
        return control.value.endsWith(domainName) ? { domain: domainName } : null
    } // closure
}