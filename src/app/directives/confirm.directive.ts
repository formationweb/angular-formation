import { Directive, HostListener, input, output } from "@angular/core";

@Directive({
    selector: '[confirm]'
})
export class ConfirmDirective {
    //  @Input('confirm') message = ''
    // @Input() confirmUserName = ''
    // @Output() eventDelete: EventEmitter<void> = new EventEmitter()
    readonly message = input('', { alias: "confirm" });
    readonly confirmUserName = input('');
    readonly eventDelete = output<void>()

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message() + ' ' + this.confirmUserName())
        if (bool) this.eventDelete.emit()
    }
}