import { Component, input } from "@angular/core";

@Component({
    selector: "app-loader",
    template: `
        @if (loading()) {
            <div aria-busy="true"></div>
        }
        @else {
            <ng-content />
        }
    `
})
export class Loader {
    loading = input.required<boolean>()
}