import { Directive, input, output } from "@angular/core";

@Directive({
    selector: '[confirm]',
    host: {
        '(click)': 'openDialog()'
    }
})
export class ConfirmDirective {
    readonly message = input('', {
        alias: 'confirm'
    })
    readonly confirmUsername = input('')
    readonly onConfirm = output<void>()

    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        if (bool) this.onConfirm.emit()
    }
}