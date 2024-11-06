import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from "../../core/interfaces/user";
import { LangPipe } from "../../shared/pipes/lang.pipe";
import { RouterLink } from "@angular/router";
import { ConfirmDirective } from "../../shared/directives/confirm.directive";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".title" />
            <header>{{ user.name }}</header>
            <p>{{ user.email }}</p>
            <ng-content />
            <footer>
                <button (click)="removeUser()" 
                    confirm="Etes vous de ..."
                    [confirmUserName]="user.name"
                >{{ 'REMOVE' | lang:'fr' }}</button>
                <button [routerLink]="['user', user.id]">Modifier</button>
            </footer>
        </article>
    `,
    standalone: true,
    imports: [LangPipe, RouterLink, ConfirmDirective]
})
export class UserCardComponent implements AfterContentInit {
    @Input() user: User = {} as User
    @ContentChild('refTitle') myTitle!: ElementRef<HTMLHeadingElement>
    @Output() onDelete: EventEmitter<number> = new EventEmitter()

    ngAfterContentInit() {
        //console.log(this.myTitle.nativeElement)
    }

    removeUser() {
        this.onDelete.emit(this.user.id)
    }
}