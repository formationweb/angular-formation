import { AfterContentInit, Component, ContentChild, ElementRef, input, Input, OnInit } from "@angular/core";
import { User } from "../../core/interfaces/user";

@Component({
    selector: 'app-user-card',
    template: `
        <article>
            <ng-content select=".title" />
            <header>{{ user.name }}</header>
            <p>{{ user.email }}</p>
            <ng-content select=".footer" />
            <ng-content />
        </article>
    `
})
export class UserCardComponent implements OnInit, AfterContentInit {
   @Input() user: User = {} as User
   @ContentChild('refTitle') propTitle!: ElementRef<HTMLElement>

   ngOnInit(): void {
       
   }

   ngAfterContentInit(): void {
     //console.log(this.propTitle.nativeElement)
   }
}