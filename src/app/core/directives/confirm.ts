import { Directive, HostListener, input } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    message = input.required<string>({
        alias: 'confirm'
    })
    confirmUsername = input('')

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        console.log(bool)
    }
}