import { Directive, HostListener, input, output } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    message = input.required<string>({
        alias: 'confirm'
    })
    confirmUserName = input('')
    handleConfirm = output<void>()
    // @Input('confirm') message = ''

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUserName())
        if (bool) this.handleConfirm.emit()
    }
}