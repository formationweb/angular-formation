import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, input, Input, OnInit, Output } from "@angular/core";
import { User } from "../../core/interfaces/user";
import { LangPipe } from "../../pipes/lang.pipe";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <!-- <ng-content select=".title" /> -->
            <header>{{ user.name }}</header>
            <p>{{ user.email }}</p>
            <!-- <ng-content select=".footer" />
            <ng-content /> -->
            <button (click)="eventDelete.emit(user.id)">{{ 'REMOVE' | lang:'fr' }}</button>
        </article>
    `,
    imports: [LangPipe]
})
export class UserCardComponent implements  AfterContentInit {
   @Input() user: User = {} as User
   @Output() eventDelete: EventEmitter<number> = new EventEmitter()
   @ContentChild('refTitle') propTitle!: ElementRef<HTMLElement>

   ngAfterContentInit(): void {
     //console.log(this.propTitle.nativeElement)
   }
}