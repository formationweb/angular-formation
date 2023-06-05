import { NgModule } from "@angular/core";
import { PluralPipe } from "./pipes/plural.pipe";

@NgModule({
    declarations: [PluralPipe],
    imports: [],
    exports: [PluralPipe]
})
export class SharedModule {}