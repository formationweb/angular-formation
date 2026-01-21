import { Directive, input, output } from "@angular/core";

@Directive({
    selector: '[confirm]',
    host: {
        '(click)': 'openDialog()'
    }
})
export class ConfirmDirective {
    message = input('', {
        alias: 'confirm'
    })
    confirmUsername = input()
    onConfirm = output()

    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        if (bool) this.onConfirm.emit()
    }
}