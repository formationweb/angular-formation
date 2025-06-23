import { Pipe, PipeTransform } from "@angular/core";

type WordsDict = {
    [wordId: string]: {
        [locale: string]: string
    }
}

const WORDS: WordsDict = {
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