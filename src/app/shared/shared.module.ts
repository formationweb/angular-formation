import { NgModule } from "@angular/core";
import { PluralPipe } from "./pipes/plural.pipe";
import { LangPipe } from "./pipes/lang.pipe";
import { AutoCompletePipe } from "./pipes/autocomplete.pipe";
import { ExtensionPipe } from "./pipes/extension.pipe";

@NgModule({
    declarations: [PluralPipe, LangPipe, AutoCompletePipe, ExtensionPipe],
    imports: [],
    exports: [PluralPipe, LangPipe, AutoCompletePipe, ExtensionPipe]
})
export class SharedModule {}