import { Directive, HostListener, input, output } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    message = input.required<string>({
        alias: 'confirm'
    })
    confirmUsername = input('')
    onConfirm = output()

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        if (bool) this.onConfirm.emit()
    }
}