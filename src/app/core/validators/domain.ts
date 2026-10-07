import { AbstractControl } from "@angular/forms";

// export function domainValidator(control: AbstractControl<string>): { domain: boolean } | null {
//     return control.value.endsWith('gmail.com') ? { domain: true } : null
// }

export function domainValidator(domainName: string) {
    return function(control: AbstractControl<string>): { domain: string } | null {
        return control.value.endsWith(domainName) ? { domain: domainName } : null
    } // closure, anonymous
}