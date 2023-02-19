import {secondTask} from "./secondTask.js";

export const thirdTask = {
  sentence: "",
  iterator: "",

  [Symbol.iterator](numOfTask = this.iterator) {
    let line = thirdTask.sentence;
    let count = 1;
    if (line === '') return [];
    if (typeof (line) !== 'string') throw new Error('Wrong type');
    if (numOfTask === 'first') {
      let counter = -1;
      let arr = [];
      if (line.length % 2 === 0) {
        while (counter <= line.length) {
          arr.push(line[counter]);
          counter += 2;
        }
        return {
          next() {
            if (arr[count] !== undefined) return {done: false, value: arr[count++]};
            else return {done: true};
          }
        }
      } else {
        return {
          next() {
            if (count * 2 < line.length) return {done: false, value: line [(2 * (count++)) - 1]};
            else return {done: true};
          }
        }
      }
    }
    else if (numOfTask === 'second') {
      const div = [' ', '.', ',', '!', '?', ':', ';', '<', '>', '[', ']', '{', '}', '"', '/', '@', '#', '$', "%", '^', '&', '*', '(', ')', '_', '—', '~'];

      const words = [];
      let word = '';
      for (let symbol of line) {
        if (div.includes(symbol)) {
          if (word.length > 0) {
            words.push(word);
            word = '';
          }
        }
        else {
          word += symbol;
        }
      }
      if (!div.includes(line[line.length - 1])) words.push(word);
      count = 0;
      return {
        next() {

          if (count < words.length) return {done: false, value: words[count++]};
          else return {done: true};
        }
      }
    }

    else if (numOfTask === 'third') {
      let arrForSentences = [];
      let div = ['.', '!', '?'];
      let sent = '';

      for (let word of line) {
        if (div.includes(word)) {
          if (sent.length > 0) {
            arrForSentences.push(sent);
            sent = '';
          }
        }
        else {
          sent += word;
        }
      }
      if (!div.includes(line[line.length - 1])) arrForSentences.push(sent);
      count = 0;
      return {
        next() {
          if (count < arrForSentences.length) return {done: false, value: arrForSentences[count++]};
          else return {done: true};
        }
      }
    }
    else if (numOfTask === 'fourth') {
      let div = ['a', 'A', 'e', 'E', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O'];
      const arr = [];
      for (const symbol of line) {
        if (div.includes(symbol)) arr.push(symbol);
      }
      count = 0;
      return {
        next() {
          if (count < arr.length) return {done: false, value: arr[count++]};
          else return {done: true};
        }
      }
    }
  }
}
