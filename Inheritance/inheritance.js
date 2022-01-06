/*//Creating Object using Object lierals "{}"
Ultimate = {
  trophies: 10000,
  color: 'purple',
  kingLevel: 13,
  statistics: function () {
    return this.trophies + ' ' + this.color + ' ' + this.kingLevel;
  },
};
//Creating Object using Object.create function which inherits 'Ultimate Object' properties in __proro__
Master = Object.create(Ultimate);
Master.trophies = 7500;
Master.color = 'blue';

//Creating an empty Object and inheriting Ultimate Obj attributes by using On=bject,setPrototypeOf
const challenger = {};
Object.setPrototypeOf(challenger, Ultimate);

//Creating an empty Object and inheriting Ultimate Obj attributes by using On=bject,setPrototypeOf
//assigning those to Master as well as Champion Objects.

Champion = Object.assign(Master, challenger);
//console.log(Master.statistics());
Champion.trophies = 1500;
Champion.kingLevel = 7;
Champion.statistics = function () {
  return this.trophies + ' ' + this.color + ' ' + this.kingLevel;
};

const empty = {
  color: 'Green',
};
console.log(empty);
noob = Object.assign(Champion, empty);

//const sat = new Master();
// console.log( Master.statistics());
// console.log( Champion.statistics());
// console.log( challenger.statistics());
// console.log( Ultimate.statistics());
*/

// Object.prototype.calculator = function () {
//   let sum = 2;
//   return sum;
// };
// console.log(calculator);

// const cal = {
//   calculator: function (a,b) {
//     return arguments;
//   },
// };
// console.log(cal.calculator());
// let params = (a = 400, b = 20, c) => a+b; // returning the object {foo: "a"}

// console.log(params)

Object.prototype.speak = (name) => {
  console.log(name);
};
class Sat {
  name = 'sat';
  talk = function () {
    return `${this.name} is talking`;
  };
}
const ben = {
  name: 'ben',
  talk: function () {
    return `${this.name} is talking`;
  },
};
ben.kill = function () {
  return `Killing`;
};
const gwen = Object.assign(ben);

const bec = new Sat();
// bec.talk();
console.log(gwen.talk());
console.log(bec.talk());

// Sat.__proto__.speak('Hey Sexy');
Array.prototype.traverse = (arr) => {
  return arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
let x = arr.traverse(arr);
console.log(x);
