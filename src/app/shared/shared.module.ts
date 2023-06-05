import { NgModule } from "@angular/core";
import { PluralPipe } from "./pipes/plural.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { AutoCompletePipe } from "./pipes/autocomplete.pipe";

@NgModule({
    declarations: [PluralPipe, LangPipe, AutoCompletePipe],
    imports: [],
    exports: [PluralPipe, LangPipe, AutoCompletePipe]
})
export class SharedModule {}