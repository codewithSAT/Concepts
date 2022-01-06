let count = 1;
console.log(this);
const getData = () => {
  console.log(`searched times : ${count++}`);
};
getData();
const optimizedFunction = (fn, delay) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFunction = optimizedFunction(getData, 300);


