export interface data {
  license: License;
  meanings: Meaning[];
  phonetics: Phonetic[];
  sourceUrls: string[];
  word: string;
}

export interface License {
  name: string;
  url: string;
}

export interface Meaning {
  antonyms: string[];
  definitions: Definition[];
  partOfSpeech: string;
  synonyms: string[];
}

export interface Definition {
  antonyms: any[];
  definition: string;
  synonyms: any[];
  example?: string;
}

export interface Phonetic {
  audio: string;
  license?: License2;
  sourceUrl?: string;
  text?: string;
}

export interface License2 {
  name: string;
  url: string;
}
