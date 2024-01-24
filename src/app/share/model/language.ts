
export enum Language {
    English = 'English',
    Hebrew = 'Hebrew',
  }
  export class TranslatedWord {
    constructor(
        public origin : string,
        public target: string) 
        {}
}
