import { Pipe, PipeTransform } from "@angular/core";

type Dict = {
    [wordId: string]: {
        [locale: string]: string
    }
}

const WORDS: Dict = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}

@Pipe({
    name: 'lang'
})
export class LangPipe implements PipeTransform {
    transform(wordId: string, locale: string) {
        return WORDS[wordId][locale]
    }
}