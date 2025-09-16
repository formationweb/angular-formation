import { Pipe, PipeTransform } from "@angular/core";

type DictWords = {
    [wordId: string]: {
        [locale: string]: string
    }
}

//type DictWords = Record<string, Record<string, string>>

const WORDS: DictWords = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}

@Pipe({
    name: 'lang'
})
export class LangPipe implements PipeTransform {
    transform(wordId: string, locale: string): string {
        return WORDS[wordId][locale]
    }
}