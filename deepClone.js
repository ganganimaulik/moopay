function deepClone(obj) {
  // assuming obj will not have function as property value
  return JSON.parse(JSON.stringify(obj));
}

let me = {name: 'maulik'};
let me2 = deepClone(me);

me.name = 'Maulik Gangani';
console.log(me);
console.log(me2); //changing me.name does not update me2
