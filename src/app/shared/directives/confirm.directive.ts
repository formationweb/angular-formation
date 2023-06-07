import { Directive, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    @Input('confirm') message: string = ''
    @Input() confirmUsername: string = ''

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message + ' ' + this.confirmUsername)
        console.log(bool)
    }
}