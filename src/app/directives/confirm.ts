import { Directive, HostListener, input } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    message = input.required<string>({
        alias: 'confirm'
    })
    confirmUserName = input('')
    // @Input('confirm') message = ''

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUserName())
        console.log(bool)
    }
}