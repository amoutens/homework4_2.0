export const secondTask = {
  //{type:"deer", amount:5},{type:"crocodile", amount: 3}, {type:"dog", amount: 2}, {type:"lion", amount: 1}
  zoo: [],
  amountByTypeOfAnimalWithMethods(type) {
    function findAnimal(type) {
      return animal.type === type;
    }
    const animal = secondTask.zoo.find(findAnimal);
    if (animal) return animal.amount;
    else return 0;
  },
  amountByTypeOfAnimalWithoutMethods(type) {
    for (let animal of secondTask.zoo) {
      if (animal.type === type) return animal.amount;
    }
    return 0;
  },
  amountAllAnimalsWithMethods() {
    return secondTask.zoo.reduce((sum, currentValue) => sum + currentValue.amount, 0 );
  },
  amountAllAnimalsWithoutMethods() {
    let sum = 0;
    for (let animals of secondTask.zoo) {
      sum+=animals.amount;
    }
    return sum;
  },
  animalsByAmountWithMethods(amount) {
    let verify = secondTask.zoo.filter(animals => animals.amount === amount);
    return verify.map(animals => animals.type);

  },
  animalsByAmountWithoutMethods(amount) {
    let res = [];
    let i = 0;
    for (let animal of secondTask.zoo) {
      if (animal.amount === amount) {
        res[i] = animal.type;
        i++;
      }
    }
    return res;
  },
  animalsSortWithMethods() {
    let zooClone = secondTask.zoo.slice(0);
    return zooClone.sort(function (a,b){
      if (a.amount > b.amount) {
        return 1;
      }
      if (a.amount < b.amount) {
        return -1;
      }
      return 0;
    })
  },
  animalsSortWithoutMethods(){
    let zooClone = secondTask.zoo.slice();
    for (let i = 0; i < zooClone.length - 1; i++) {
      for (let j = 0; j < (zooClone.length - i - 1); j++) {
        if(zooClone[j].amount > zooClone[j+1].amount) {
          [zooClone[j], zooClone[j+1]] = [zooClone[j+1], zooClone[j]];
        }
      }
    //console.log(zooClone);
    }
    return zooClone;
  },

  addAnimalWithMethods(type, amount = 1) {
    if (type === null || type === undefined || !isNaN(type) || (typeof(type) !== 'string')) {
      throw new Error("Type of animal is`nt string");
    }
    if (isNaN(+amount) || !Number.isFinite(+amount) || !Number.isInteger(+amount)) {
      throw new Error("Type of amount is`nt integer");
    }

    const animal = secondTask.zoo.find(animal => animal.type === type);
    if (animal) animal.amount += +amount;
    else {
      secondTask.zoo.push({
        type: type,
        amount: +amount,
      });
    }
  },
  addAnimalWithoutMethods(type, amount = 1){
    if (type === null || type === undefined || !isNaN(type) || (typeof(type) !== 'string')) {
      throw new Error("Type of animal is`nt string");
    }
    if (isNaN(+amount) || !Number.isFinite(+amount) || !Number.isInteger(+amount)) {
      throw new Error("Type of amount is`nt integer");
    }
    let bool = false;
    for (let animal of secondTask.zoo) {
      if (animal.type === type) {
        bool = true;
        animal.amount += +amount;
      }
    }
    if (!bool) {
      let lengthOfZoo = secondTask.zoo.length;
      secondTask.zoo[lengthOfZoo] = {
        type: type,
        amount: +amount
      }
    }
      //return secondTask.zoo;
    },
  outputAnimalsWithMethods() {
   return secondTask.zoo.map(animal => animal.type);
  },
  outputAnimalsWithoutMethods() {
    let zooAnimals = [];
    for (let i = 0; i < secondTask.zoo.length; i++) {
      zooAnimals[i] = secondTask.zoo[i].type;
    }
    return zooAnimals;
  },
  deleteAnimalWithMethods(type) {
    let animalIndex = secondTask.zoo.findIndex( animal => animal.type === type);
    if (animalIndex !== -1){
      secondTask.zoo.splice(animalIndex, 1);
    }
    //return secondTask.zoo;
  },
  deleteAnimalWithoutMethods(type) {
    let i = 0;
    for (let animal of secondTask.zoo) {
      if (animal.type !== type) i++;
      else break;
    }
    for (let j = 0; j < secondTask.zoo.length; j++) {
      if(j > i){
        [secondTask.zoo[j-1], secondTask.zoo[j]] = [secondTask.zoo[j], secondTask.zoo[j-1]];
      }
    }
    secondTask.zoo.length--;
    //return secondTask.zoo;
  },
  checkElementInZooWithMethods(type) {
    //намагалася тут спочатку використати include, але воно ніяк не хотіло працювати
      return secondTask.zoo.some(animal => animal.type === type);
  },
  checkElementInZooWithoutMethods(type) {
    for (let animal of secondTask.zoo) {
      if (animal.type === type) return true;
    }
    return false;
  }
}


