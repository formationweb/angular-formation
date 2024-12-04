import { AfterContentInit, Component, computed, contentChild, ContentChild, effect, ElementRef, EventEmitter, input, Input, OnInit, output, Output } from "@angular/core";
import { User } from "../../core/interfaces/user";
import { LangPipe } from "../../pipes/lang.pipe";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <!-- <ng-content select=".title" /> -->
            <header>{{ name() }}</header>
            <p>{{ user().email }}</p>
            <!-- <ng-content select=".footer" />
            <ng-content /> -->
            <button (click)="eventDelete.emit(user().id)">{{ 'REMOVE' | lang:'fr' }}</button>
            <button [routerLink]="['user', user().id]">Modifier</button>
        </article>
    `,
    imports: [LangPipe, RouterLink]
})
export class UserCardComponent implements  AfterContentInit {
   //@Input() user: User = {} as User
   user = input<User>({} as User)
   name = computed(() => this.user().name)
   //@Output() eventDelete: EventEmitter<number> = new EventEmitter()
   eventDelete = output<number>()
   //@ContentChild('refTitle') propTitle!: ElementRef<HTMLElement>
   propTitle = contentChild<ElementRef<HTMLElement>>('refTitle')

   ngAfterContentInit(): void {
     //console.log(this.propTitle()?.nativeElement)
   }
}