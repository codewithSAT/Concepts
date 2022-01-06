//Used to delay/limit the function calls for a specific time interval
//session management
//Shooting Games
//resize events
let c = 0;

const showCount = (ckeckflag) => {
  ckeckflag && console.log('clicked', c++);
};
const showPixels = (checkflag) => {
  checkflag && console.log(window.outerWidth + 'px');
};

let flag = true;
const delayedFuction = (fn, delay) => {
  return function () {
    if (flag == true) {
      setTimeout(() => {
        fn(true);
        flag = true;
      }, delay);
    }
    flag = false;
  };
};

const optimizeClick = delayedFuction(showCount, 2000);

window.addEventListener('resize', delayedFuction(showPixels, 1000));
