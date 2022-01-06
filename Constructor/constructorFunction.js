function human(name) {
  this.name = name;

  this.talk = () => {
    return `${this.name} is Talking'`;
  };
  this.walk = () => {
    return `${this.name} is Walking'`;
  };
  this.eat = () => {
    return `${this.name} is Eating'`;
  };
  //return name;
}

const sat = new human('Sat');
const dus = human('Sat');
console.log(sat);
//console.log(dus.talk());
// console.log(sat.walk());

// function SuperElement(type, content) {
//   this.element = document.createElement(type);
//   this.element.innerText = content;
//   document.body.append(this.element);
//   this.element.addEventListener('click', () => {
//     console.log(this.element);
//   });
// }

// const el1 = new SuperElement('h1', 'Wassup');
// const el2 = new SuperElement('p', 'pTAg');
// const el3 = new SuperElement('h5', 'stupid');

// const arr = ['King', 'Queen', 'Jack'];
// arr.map((item) => {
//   return new SuperElement('h1', item);
// });

//construction function creates this in the block and returns this behind the scenes
