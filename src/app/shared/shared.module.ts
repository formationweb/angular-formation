import { NgModule } from "@angular/core";
import { PluralPipe } from "./pipes/plural.pipe";
import { LangPipe } from "./pipes/lang.pipe";

@NgModule({
    declarations: [PluralPipe, LangPipe],
    imports: [],
    exports: [PluralPipe, LangPipe]
})
export class SharedModule {}