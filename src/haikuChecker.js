//import { syllable } from "syllable";
//import {syllable} from 'https://esm.sh/syllable@5
//import something from './../src/index.js';

export default class HaikuChecker {
  constructor(haiku) {
    this.haiku = haiku;
  }

  isThreeLines() {
    const lines = this.haiku.trim().split("\n");
    if (lines.length === 3) {
      return true;
    }
    return false;
  }

  vowelCount() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < this.haiku.length; i++) {
      const char = this.haiku[i].toLowerCase();
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }

  // countSyllables(word) {

  // }

  /* wordSplit(){
     const word = this.haiku.trim().split('\n');
   }
   
   vowelFinder(){
     const vowels = ["a", "e", "i", "o", "u"];
  
   } */
}
