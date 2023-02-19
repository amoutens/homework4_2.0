import {taskFirst} from "./firstTask.js";
import {secondTask} from "./secondTask.js";
import {thirdTask} from "./thirdTask.js";
import {fourthTask} from "./fourthTask.js";
import {fifthTask} from "./fifthTask.js";
import {sixthTask} from "./sixthTask.js";

export function assertVariables(a, b) {
  let bool = a === b;
  if(!bool) throw new Error('Error Variables');
}

export function assertObject(object1, object2) {
  let bool = (JSON.stringify(object1) === JSON.stringify(object2));
  if(!bool) throw new Error('Error Object');
}
export function assertArray(arr1, arr2) {
  let bool = arr1.length === arr2.length &&
    (
      arr1.every((object, index) => (JSON.stringify(object) === JSON.stringify(arr2[index])) ||
      arr1.every((value, index) => value === arr2[index])
    ));
  if(!bool) throw new Error('Error array');
}
export function testFirstTask() {
  assertObject( taskFirst, {idFirstStr: 123456, [Symbol("id")]: 111111});
  assertArray( ["idFirstStr"], Object.keys(taskFirst));
}
export function testSecondTask() {
    assertArray(secondTask.zoo, []);//перевіряємо пустий масив
    assertVariables(secondTask.amountByTypeOfAnimalWithMethods("elephant"), 0); //перевіряємо кількість окремого виду за ім'ям
    assertVariables(secondTask.amountByTypeOfAnimalWithoutMethods("elephant"), 0);

    assertVariables(secondTask.amountByTypeOfAnimalWithoutMethods(), 0); //кількість тварин за окремим типом
    assertVariables(secondTask.amountByTypeOfAnimalWithMethods(), 0);

    assertVariables(secondTask.amountAllAnimalsWithMethods(), 0); //кількість усіх тварин
    assertVariables(secondTask.amountAllAnimalsWithoutMethods(), 0);

    assertArray(secondTask.animalsByAmountWithMethods(5), []); //тварини за кількістю
    assertArray(secondTask.animalsByAmountWithoutMethods(0), []);

    assertArray(secondTask.outputAnimalsWithMethods(), []); //вивід всіх тварин
    assertArray(secondTask.outputAnimalsWithoutMethods(), []);

    assertVariables(secondTask.checkElementInZooWithMethods("elephant"), false); //перевірка, чи присутній слон в зоопарку
    assertVariables(secondTask.checkElementInZooWithoutMethods("elephant"), false);

    secondTask.addAnimalWithMethods("deer", 2); //додаємо оленя
    assertVariables(secondTask.checkElementInZooWithoutMethods("deer"), true); //він присутній
    assertArray(secondTask.animalsByAmountWithoutMethods(2), ["deer"]); //тварина за кількістю 2

    secondTask.addAnimalWithoutMethods("crocodile", 2); //додаємо крокодила
    assertArray(secondTask.animalsByAmountWithMethods(2), ["deer", "crocodile"]); //тварини за кількістю 2
    secondTask.addAnimalWithMethods("deer", 3)// amount += 3 (5) //додаємо ще 3 оленя в зоопарк
    assertVariables(secondTask.checkElementInZooWithMethods("crocodile"), true); //перевіряємо присутність крокодила в зоопарку
    assertArray(secondTask.animalsByAmountWithoutMethods(2), ["crocodile"]); //тварини за кількістю 2 (зник олень)
    secondTask.addAnimalWithoutMethods("crocodile", 1); //amount+=1 (3) //додаємо ще 1 крокодила
    assertVariables(secondTask.amountAllAnimalsWithMethods(), 8); //усього тварин в зоопарку

    secondTask.addAnimalWithMethods("dog", 2); //додаємо собаку
    secondTask.addAnimalWithoutMethods("lion", 1); //додаємо льва
    assertArray(secondTask.animalsSortWithMethods(), [ //сортуємо за кількістю тваринок
        { type: 'lion', amount: 1 },
        { type: 'dog', amount: 2 },
        { type: 'crocodile', amount: 3 },
        { type: 'deer', amount: 5 }
      ]
    );

    assertArray(secondTask.animalsSortWithoutMethods(), [
        { type: 'lion', amount: 1 },
        { type: 'dog', amount: 2 },
        { type: 'crocodile', amount: 3 },
        { type: 'deer', amount: 5 }
      ]
    );
    assertArray(secondTask.outputAnimalsWithMethods(), ['deer', 'crocodile', 'dog', 'lion']); //масив після сортування не змінився

    secondTask.deleteAnimalWithoutMethods('dog');
    //удаляємо собаку з середини зоопарку
    assertVariables(secondTask.checkElementInZooWithoutMethods('dog'), false); //він не пристуній

    secondTask.deleteAnimalWithMethods('deer');
    //видаляємо оленя з початку зоопарку
    assertVariables(secondTask.checkElementInZooWithoutMethods('deer'), false); //він не присутній

    assertArray(secondTask.outputAnimalsWithMethods(), ['crocodile', 'lion']); //виводимо усіх тварин
    assertArray(secondTask.outputAnimalsWithoutMethods(), ['crocodile', 'lion']);

    secondTask.addAnimalWithoutMethods("leopard", "5"); //працює також з числами, які є рядками
    secondTask.addAnimalWithoutMethods("leopard", "2"); //amount +=2

    assertArray(secondTask.outputAnimalsWithoutMethods(), ['crocodile', 'lion', 'leopard']);
    assertArray(secondTask.animalsByAmountWithMethods(7), ['leopard']);
  try {
    secondTask.addAnimalWithoutMethods('croco', 2.5); //пробуємо додати 2.5 крокодила
  }
  catch (error){
    console.log('Error: ', error.message);
  }
  try{
    secondTask.addAnimalWithMethods(15, 'croco'); //не правильно розташовані елементи
  }
  catch (error) {
    console.log('Error: ', error.message);
  }
  try {
    secondTask.addAnimalWithoutMethods('croco', 'afsfafa'); //кількість тварин задана літерами
  }
  catch (error){
    console.log('Error: ', error.message);
  }
  try{
    secondTask.addAnimalWithMethods(15, 90); //тварина задана числом
  }
  catch (error){
    console.log('Error: ', error.message);
  }
  try{
    secondTask.addAnimalWithoutMethods(null, 10); //тварина нул
  }
  catch (error){
    console.log('Error: ', error.message);
  }
  try {
    secondTask.addAnimalWithMethods("croco", Infinity) //кількість тварин нескінченість
  }
  catch (error){
    console.log('Error: ', error.message);
  }


}
export function testThreeTask(){
    assertVariables(thirdTask.sentence, ""); //напочатку пустий рядок
    thirdTask.sentence = 'Hello world!!! It`s me?'; //вводимо нове речення

    thirdTask.iterator = "first"; //ітеруємо за кожною 2 літерою
    let arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }

    assertArray(arr, [
      'e', 'l', ' ', 'o',
      'l', '!', '!', 'I',
      '`', ' ', 'e'
    ]);

    thirdTask.iterator = "second"; //ітеруємо за словами
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['Hello', 'world', 'It`s', 'me']);

    thirdTask.iterator = "third"; //ітеруємо за реченням
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['Hello world', ' It`s me']);

    thirdTask.iterator = "fourth"; //ітеруємо за голосними
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, [ 'e', 'o', 'o', 'I', 'e' ]);

    thirdTask.sentence = 'me...'; //одне слово з кінцевими розділовими знаками

    thirdTask.iterator = "second";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['me']);

    thirdTask.iterator = "third";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['me']);

    thirdTask.sentence = 'me'; //одне слово без кінцевого розділового знаку

    thirdTask.iterator = "third";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['me']);

    thirdTask.iterator = "second";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['me']);

    thirdTask.sentence = 'helloworld'; //ітератор працює, коли довжина рядка - парне число
    thirdTask.iterator = "first";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, [ 'e', 'l', 'w', 'r', 'd' ]);

    thirdTask.sentence = 'hello world it`s me'; //речення без кінцевого розділового знаку
    thirdTask.iterator = "second";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['hello', 'world', 'it`s', 'me']);

    thirdTask.iterator = "third";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['hello world it`s me']);

    thirdTask.sentence = '1234'; //речення, яке створене з цифр

    thirdTask.iterator = "first";
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, ['2', '4']);

    thirdTask.sentence = 'AAaaaaAAAA';
    thirdTask.iterator = 'fourth';
    arr = [];
    for (let el of thirdTask) {
      arr.push(el);
    }
    assertArray(arr, [
        'A', 'A', 'a', 'a',
        'a', 'a', 'A', 'A',
        'A', 'A'
      ]
    );
    try { //з не рядком працювати не буде
    thirdTask.sentence = undefined;
    thirdTask.iterator = "first";
    arr = [];
    for(let el of thirdTask) {
      arr.push(el);
    }
    console.log(arr);
  }
  catch (error) {
    console.log('Error: ', error.message);
  }
}

export function testFourthTask() {
    let map = new Map(); //створюємо
    assertVariables(map.get(), fourthTask.get()); //перевіряємо, що об'єкт пустий

    fourthTask.set('element', 'string'); //додаємо елемент
    map.set('element', 'string');

    assertVariables(map.get('element'), fourthTask.get('element')); //перевіряємо, що він додався

    fourthTask.set(1, 2); //додаємо елемент з числами
    map.set(1, 2);

    assertVariables(map.get(1), fourthTask.get(1));

    fourthTask.set('array', [1, 2, 3, 4, 5, 6]); //додаємо елемент значення якого масив
    map.set('array', [1, 2, 3, 4, 5, 6]);

    assertArray(map.get('array'), fourthTask.get('array'));

    fourthTask.set('obj', {1: 'first', 2: "second"}); //додаємо елемент значення якого об'єкт
    map.set('obj', {1: 'first', 2: 'second'});

    assertObject(map.get('obj'), fourthTask.get('obj'));

    fourthTask.set('sfdf', undefined); //додаємо елемент значення якого undefined
    map.set('sfdf', undefined);
    assertVariables(map.get('sfdf'), fourthTask.get('sfdf'));

    assertVariables(undefined, fourthTask.get('nope')); //якщо ж елементу не буде, то ми отримаємо андефайнд


    assertVariables(fourthTask.has('obj'), true);
    assertVariables(fourthTask.has('array'), true);
    assertVariables(fourthTask.has('obj1'), false); //елементу з таким ключем немає

    assertVariables(map.size, fourthTask.size()); //перевірямо розмір

    fourthTask.delete();
    map.delete(); //якщо ми нічого не будемо удаляти, то нічого не удалиться
    assertObject(fourthTask.map, Object.fromEntries(map));

    fourthTask.delete(1);
    map.delete(1); //удаляємо елемент 1:2
    assertObject(fourthTask.map, Object.fromEntries(map));


    assertArray(Object.keys(Object.fromEntries(map)), fourthTask.keys()); //отримаємо ключі
    assertArray(Object.values(Object.fromEntries(map)), fourthTask.values()); //отримаємо значення
    assertArray(Object.entries(Object.fromEntries(map)), fourthTask.entries()); //отримаємо і ключ, і значення

    map.clear();
    fourthTask.clear(); //очищаємо все

    assertObject(fourthTask.map, Object.fromEntries(map));

}
export function testFifthTask(){
  let goodStudent = { //приклад студента, який повністю заповнив всі поля
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 1,
    faculty: 'FICE',
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
    math: 90,
    programming: 98,
    dm: 95,
    physics: 100,
    history: 93,
    OS: 100
  }

  assertVariables(fifthTask.createUsername('Stepan', 'Bandera'), 'Stepan Bandera'); //створюємо новий юзернейм
  assertVariables(fifthTask.createUsername('', ''), ' '); //якщо пустий рядок
  assertVariables(fifthTask.createUsername(), 'undefined undefined'); //якщо взагалі ніц не вводиться

  assertArray(fifthTask.createMarks({math: 90, //створюємо масив з оцінками
    programming: 98,
    dm: 95,
    physics: 100,
    history: 93,
    OS: 100}), [90,98,95,100,93,100]);

  assertVariables(fifthTask.averageMarks([90,98,95,100,93,100]), 96); //середня оцінка
  assertVariables(fifthTask.averageMarks([]), 0); //якщо оцінок немає, то 0

  fifthTask.makeNewUser(goodStudent);
  assertObject(fifthTask.makeNewUser(goodStudent), { //створюємо нового юзера
    username: "Kateryna Zhayvoronok",
    mail:"1gayv425@gmail.com",
    averageMark: 96,
    subjects: {
      math: 90,
      programming: 98,
      dm: 95,
      physics: 100,
      history: 93,
      OS: 100
    }
  }
  );
  let goodStud = {
    name: 'Alan',
    surname: 'Rickman',
    course: 4,
    faculty: 'FICE',
    security: {
      password:'allala',
      email: 'AR1946@gmail.com',
    },
    math: 100,
    economy: 100,
    ukrainian: 100
  }

  fifthTask.makeNewUser(goodStud);
  assertVariables(fifthTask.averageMarksByUsername('Alan Rickman', 'allala'), 100);

  let studentWithoutInfo3 = { //приклад студента, який не заповнив поле з оцінками
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 1,
    faculty: 'FICE',
    security: {
    password: 'slavaukraini12345678',
    email: '1gayv425@gmail.com',
    },
  }

  assertObject(fifthTask.makeNewUser(studentWithoutInfo3), { //створення юзера без оцінок
    username:'Kateryna Zhayvoronok',
    mail:'1gayv425@gmail.com',
    averageMark: 0,
    subjects: {}
  })

  //перевіряємо випадки, коли недостатньо або неправильно введена інформація
  let studentWithoutInfo1 = { //приклад студента, у якого відсутнє поле захисту з паролем
    name: 'Kateryna',
    surname: 'Zhayvoronok'
  }
  let studentWithoutInfo2 = { //приклад студента, у якого не всі заповені поля(факультет)
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 1,
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
  }

  let studentWrongInfo1 = { //приклад студента, який ввів курс буквами
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 'ssfafsfg',
    faculty: 'FICE',
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
    math: 90,
    programming: 98,
    dm: 95,

  }
  let studentWrongInfo2 = { //приклад студента, який ввів ім'я числом
    name: '1',
    surname: 'Zhayvoronok',
    course: 1,
    faculty: 'FICE',
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
    math: 90,
    programming: 98,
    dm: 95,

  }
  let studentWrongInfo3 = { //приклад студента, який навчається на 100 курсі ;)  що просто неможливо
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 100,
    faculty: 'FICE',
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
    math: 90,

  }
  let studentWrongInfo4 = { //поле з оцінками написане рядком
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 1,
    faculty: 'FICE',
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
    math: 90,
    programming: 98,
    dm: 95,
    physics: 'dsfg',
  }
  let studentWrongInfo5 = { //оцінка нескінченість(мрія)
    name: 'Kateryna',
    surname: 'Zhayvoronok',
    course: 1,
    faculty: 'FICE',
    security: {
      password: 'slavaukraini12345678',
      email: '1gayv425@gmail.com',
    },
    math: 90,
    programming: Infinity,
  }
  try {
    console.log(fifthTask.makeNewUser(studentWithoutInfo1));
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    fifthTask.makeNewUser(studentWithoutInfo2);
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    fifthTask.makeNewUser(studentWrongInfo1);
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    fifthTask.makeNewUser(studentWrongInfo2);
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    fifthTask.makeNewUser(studentWrongInfo3);
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    fifthTask.makeNewUser(studentWrongInfo4);
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    fifthTask.makeNewUser(studentWrongInfo5);
  }
  catch (error){
    console.log('Error:', error.message);
  }
  try {
    assertVariables(fifthTask.averageMarksByUsername('Kateryna Zhayvoronok', 'putinhuilo123'), 96); //неправильний пароль
  }
  catch (error) {
    console.log('Error:', error.message);
  }
}
export function testSixthTask() {
    assertVariables(`${sixthTask}`, 'Mykolaiv:-7;\n' + //перевіряємо виведення рядком
      'Odesa:-3;\n' +
      'Kherson:+3;\n' +
      'Mariupol:+5;\n' +
      'Kyiv:-10;\n' +
      'Kharkiv:-8;\n' +
      'Lviv:+4.'
    );
    assertVariables((+sixthTask), -2.286); //перевіряємо вивдення числом
    sixthTask['Poltava'] = +5; //спробуємо додати нове місто
    assertVariables(`${sixthTask}`, 'Mykolaiv:-7;\n' +
      'Odesa:-3;\n' +
      'Kherson:+3;\n' +
      'Mariupol:+5;\n' +
      'Kyiv:-10;\n' +
      'Kharkiv:-8;\n' +
      'Lviv:+4;\n' +
      'Poltava:+5.'
    );
    assertVariables((+sixthTask), -1.375);
    sixthTask['Dnipro'] = 1; //без використання плюса теж працює
    assertVariables(`${sixthTask}`, 'Mykolaiv:-7;\n' +
      'Odesa:-3;\n' +
      'Kherson:+3;\n' +
      'Mariupol:+5;\n' +
      'Kyiv:-10;\n' +
      'Kharkiv:-8;\n' +
      'Lviv:+4;\n' +
      'Poltava:+5;\n' +
      'Dnipro:+1.'
    );
    assertVariables((+sixthTask), -1.111);


  try {
    sixthTask.Lviv = undefined; //якщо температура андефайнд
    console.log(`${sixthTask}`);
  }
  catch (error) {
    console.log('Error:', error.message);
  }
  try {
    sixthTask.Lviv = 112; //якщо температура перевищує за можливу
    console.log(`${sixthTask}`);
  }
  catch (error) {
    console.log('Error:', error.message);
  }
  try {
    sixthTask[undefined] = 2; //коли місто андефайнд
    console.log(`${sixthTask}`);
  }
  catch (error) {
    console.log('Error:', error.message);
  }
}


