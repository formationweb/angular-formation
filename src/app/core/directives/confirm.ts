import { Directive, input } from "@angular/core";

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

    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUsername())
        console.log(bool)
    }
}