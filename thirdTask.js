export const thirdTask = {
  sentence: "",
  iterator: "",

  [Symbol.iterator](numOfTask = this.iterator) {
    let line = thirdTask.sentence;
    let count = 1;
    if(line === '') return [];
    if(typeof (line) !== 'string') throw new Error('Wrong type');
    if(numOfTask === 'first'){
      let counter = -1;
      let arr = [];
      if(line.length % 2 === 0 ){
        while(counter <= line.length) {
          arr.push(line[counter]);
          counter +=2;
        }
        return {
          next() {
            if (arr[count] !== undefined) return {done: false, value: arr[count++]};
            else return {done: true};
          }
        }
      }
      else{
        return {
          next() {
            if (count * 2 < line.length) return {done: false, value: line [(2 * (count++)) - 1]};
            else return {done: true};
          }
        }
      }
    }
    else if (numOfTask === 'second') {
      let array = [];
      const div = [' ', '.', ',', '!', '?', ':', ';', '<', '>', '[', ']', '{', '}', '"', '/', '@', '#', '$', "%", '^', '&', '*', '(', ')','_', '—', '~'];
      let word = '';
      let countOfDiv = 0;
      let counter = 0;
      for(let i = 0; i < line.length; i++){
        if(!div.includes(line[i])){
          counter++;
        }
      }
      if(line.length === counter) {
        array.push(line);
        count = 0;
        return {
          next() {
            if (count < array.length) return {done: false, value: array[count++]};
            else return {done: true};
          }
        }
      }
      else {
        while (!div.includes(line[countOfDiv])) { //для включення першого слова в масив
          word += line[countOfDiv];
          countOfDiv++;
        }
        array.push(word);
        word = '';

        for (let i = 0; i < line.length; i++) { //для включення інших слів в масив
          if (i === line.length - 1 && !div.includes(line[i])) {
            array.push(word + line[i]);
          }
          if (div.includes(line[i])) {
            while (div.includes(line[i + 1])) { //якщо знаки повторюються по типу "!!!"
              i++;
            }
            array.push(word);
            word = '';
            continue;
          }
          word += line[i];
        }
        return {
          next() {
            if (count < array.length) return {done: false, value: array[count++]};
            else return {done: true};
          }
        }
      }

    }
    else if (numOfTask === 'third') {
      let arrForSentences = [];
      let div = ['.', '!', '?'];
      let sent = '';

      let countOfDiv = 0;
      for(let i = 0; i < line.length; i++){
        if(!div.includes(line[i])){
          countOfDiv++;
        }
      }
      if(line.length === countOfDiv){
        arrForSentences.push(line);
        let i = 0;
        return {
          next() {
            if (i < arrForSentences.length) return {done: false, value: arrForSentences[i++]};
            else return {done: true};
          }
        }
      }
      else{
        while (!div.includes(line[countOfDiv])) { //для включення першого слова в масив
          sent += line[countOfDiv];
          countOfDiv++;
        }
        arrForSentences.push(sent);
        sent = '';

        for (let i = 0; i < line.length; i++) {
          if (i === line.length - 1 && !div.includes(line[i])) arrForSentences.push(sent + line[i]);
          if (div.includes(line[i])) {
            while (div.includes(line[i+1])) {
              if(line[i+2] === ' ') i += 2;
              else i++ ;
            }
            arrForSentences.push(sent);
            sent = '';
          }
          sent += line[i];
        }
      }

      return {
        next() {
          if (count < arrForSentences.length) return {done: false, value: arrForSentences[count++]};
          else return {done: true};
        }
      }
    }
    else if (numOfTask === 'fourth') {
      let div = ['a', 'A', 'e', 'E', 'y', 'Y', 'u', 'U', 'i', 'I', 'o', 'O'];
      let array = [];
      let words = '';
      let countOfDiv = 0;
      for(let i = 0; i < line.length; i++){
        if(!div.includes(line[i])){
          countOfDiv++;
        }
      }
      if(line.length === countOfDiv){
        array.push(line);
      }

      else {
        countOfDiv = 0;
        while (!div.includes(line[countOfDiv])) {
          words += line[countOfDiv];
          countOfDiv++;
        }
        array.push(words);
        words = '';

        for (let i = 0; i < line.length; i++) {
          if (i === line.length - 1 && !div.includes(line[i])) array.push(words + line[i]);
          if (div.includes(line[i])) {
            while (div.includes(line[i + 1])) i++;
            array.push(words);
            words = '';
            continue;
          }
          words += line[i];
        }
      }
      return {
        next() {
          if (count < array.length) return {done: false, value: array[count++]};
          else return {done: true};
        }
      }
    }
  }
}

