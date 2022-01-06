// function carFactory(name, bhp, nm) {
//   // this.bhp = bhp;
//   // this.nm = nm;
//   // this.name = name;

//   return `${name} generates ${bhp} horses & ${nm}nm Torque`;
// }

// // function BikeFactory(name, bhp, nm) {
// //   this.bhp = bhp;
// //   this.nm = nm;
// //   this.name = name;
// //   this.show = () => `${name} generates ${bhp} horses & ${nm}nm Torque`;
// // }

// const honda = carFactory('Civic', 325, 250);
// //const lambo = new carFactory('Aventador', 1000, 955);
// const yamaha = carFactory('R1', 200, 190);

// console.log(honda, yamaha);
// // console.log(yamaha);

// // honda.name = 'porsche';
// // yamaha.name = 'Datona';

// // console.log(honda);
// // console.log(yamaha);

// // console.log(honda.name);
// // console.log(yamaha.name);

// // const ru = (()=>
// //   setTimeout(console.log(yamaha), 5000)
// // )
// // ru();

// const myProto = {
//   talk() {
//     return `${this.name} Talking`;
//   },
// };

// function factoryPerson(name) {
//   return Object.create(myProto, {
//     name: { value: name },
//   });
// }
// const me = factoryPerson('Sina');
// const you = factoryPerson('John');

// console.log(me.talk());
// console.log(you.talk());

// me.talk = function () {
//   return `${this.name} is Talking`;
// };

// console.log(me);
// console.log(you);
// console.log(me.talk());
// console.log(you.talk());

const calProto = {
  add() {
    return this.x + this.y;
  },
  sub() {
    return this.x - this.y;
  },
  mul() {
    return this.x * this.y;
  },
  divide() {
    return this.x / this.y;
  },
};

function calculate(x, y) {
  return Object.create(calProto, {
    x: { value: x },
    y: { value: y },
  });
}

let p = calculate(3, 3);
// let p = new calculate(3, 3);
console.log(p.x);
console.log(p.add());
console.log(p.sub());
console.log(p.mul());
console.log(p.divide());

// n.divide = function () {
//   return `Dividing`;
// };
// console.log(n.divide());
