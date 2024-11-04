import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit } from "@angular/core";
import { User } from "../../core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".title" />
            <header>{{ user.name }}</header>
            <p>{{ user.email }}</p>
            <ng-content />
        </article>
    `,
    standalone: true
})
export class UserCardComponent implements AfterContentInit {
    @Input() user: User = {} as User
    @ContentChild('refTitle') myTitle!: ElementRef<HTMLHeadingElement>

    ngAfterContentInit() {
        console.log(this.myTitle.nativeElement)
    }
}