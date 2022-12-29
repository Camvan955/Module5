import {Injectable} from '@angular/core';
import {Word} from "../model/word";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: Word[] = [
    {
      word: 'orange',
      mean: 'màu cam'
    },
    {
      word: 'blue',
      mean: 'màu xanh dương'
    },
    {
      word: 'red',
      mean: 'màu đỏ'
    },
    {
      word: 'white',
      mean: 'màu trắng'
    }]

  constructor() {
  }

  translate() {
    return this.words;
  }


  findByWord(chacracter: string ) {
    let temp = this.words.filter(element => element.word === chacracter);
    if (temp.length == 0) {
      return null;
    }
    return temp[0];
  }
}
