//Arrow Functions are defined using "=>"

// Scope of 'this' inside an Arrow function would be Global
// not with respect to its surrounding Object.
const obj = {
  fname: 'Tony',
  lname: 'Stark',
  show() {
    console.log(this);
  },

  obj1: {
    arrowShow: () => {
      console.log(this);
    },
  },
};
const x = {
  nothing: 'Emptiness',
};

obj.show.call(x);
obj.obj1.arrowShow.call(x);

//Arrow functions cannot be used as a constructor Function

const constructorfunction = (n) => console.log(n);

const a = constructorfunction(5);
//cannot create b object using new keyword as JS thinks contructorfunction is not a constructor
//let b = new constructorfunction(5)
// ----------------------
// Traditional Example
// ----------------------
// A simplistic object with its very own "this".
var obj_1 = {
  num: 100,
};

// Setting "num" on window to show how it is NOT used.
window.num = 2020; // yikes!

// A simple traditional function to operate on "this"
var add = function (a, b, c) {
  return this.num + a + b + c;
};

// call
var result = add.call(obj_1, 1, 2, 3); // establishing the scope as "obj_1"
console.log(result); // result 106

// apply
const arr = [1, 2, 3];
var result = add.apply(obj_1, arr); // establishing the scope as "obj_1"
console.log(result); // result 106

// bind
var result = add.bind(obj_1); // establishing the scope as "obj_1"
console.log(result(1, 2, 3)); // result 106
console.log((()=>'Wassup Bitches')());

// Parameterless arrow functions that are visually easier to parse
setTimeout( () => {
  console.log('I happen sooner');
  setTimeout( () => {
    // deeper code
    console.log('I happen later');
  }, 1000);
}, 3000);