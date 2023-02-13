export const sixthTask = {
  Mykolaiv: -7,
  Odesa: -3,
  Kherson: +3,
  Mariupol: +5,
  Kyiv: -10,
  Kharkiv: -8,
  Lviv: +4,

  [Symbol.toPrimitive](hint) {
    let [city, temperatures] = [Object.keys(sixthTask), Object.values(sixthTask)];
    if(city.length === 0 || temperatures.length === 0 || city.length !== temperatures.length || city.some((town) => typeof(town) !== 'string')
      || temperatures.some((temp) => isNaN(+temp))){
      throw new Error('Wrong data!');
    }
    if(temperatures.some((temp) => (temp < -111 || temp > (+56.7)))) { //максимальна і мінімальна температура на Землі
      throw new Error('This kind of temperature doesn`t exist!');
    }
    if (hint === 'string') {
      let str = '';

      for(let i = 0; i < city.length; i++) {
        if (temperatures[i] > 0 && temperatures[i][0] !== '+') temperatures[i] = `+${temperatures[i]}`;
        if(i !== city.length - 1) str+= `${city[i]}:${temperatures[i]};\n`;
        else str+= `${city[i]}:${temperatures[i]}.`
      }
      return str
    }
    else {
      return (temperatures.reduce((sum, temperature) => (+sum)+(+temperature))/temperatures.length).toFixed(3);
    }
  }
}