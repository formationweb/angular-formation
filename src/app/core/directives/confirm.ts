import { Directive, HostListener, input, output } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    message = input.required<string>({
        alias: 'confirm'
    })
    confirmUsername = input('')
    handleConfirm = output<void>()

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        if (bool) this.handleConfirm.emit()
    }
}