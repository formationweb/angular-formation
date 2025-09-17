import { Directive, HostListener, input } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    message = input('', {
        alias: 'confirm'
    })
    confirmUsername = input('')

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        console.log(bool)
    }
}