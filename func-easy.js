//------------Задание 0-------------

// function sayHello(name) {
//   if (name === "Mark") {
//     console.log(`Hi, ${name}!`);
//   } else {
//     console.log(`Hello, ${name}!`);
//   }
// }


// sayHello("Oleg"); // Hello, Oleg!
// sayHello("Viktor"); // Hello, Viktor!
// sayHello("Mark"); // Hi, Mark!


//------------Задание 1-------------

// function min(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }


// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1)); 

//------------Задание 2-------------

//---------First variant------------
// function pow(x, n) {
//   return x ** n;
// }


// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }


// console.log(pow(3, 2));
// console.log(pow(3, 3));
// console.log(pow(1, 100));

//------------Задание 3-------------

// function isEven(n) {
//   if (n % 2 == 0) {
//     return true;
//   } else return false;
// }

// console.log(isEven(4)); // true
// console.log(isEven(5));

//------------Задание 5-------------

// function convertFloor(floor) {
//   if (floor >= 0 && floor < 14) {
//     return floor + 1;
//   } else return floor;
// }


// console.log(convertFloor(-1)); // -1
// console.log(convertFloor(2)); // 3
// console.log(convertFloor(2)); // 3
// console.log(convertFloor(0)); // 1
// console.log(convertFloor(12)); // 13
// console.log(convertFloor(14)); // 14
// console.log(convertFloor(17)); // 17

// console.log(convertFloor(0)); // 1
// console.log(convertFloor(3)); // 4
// console.log(convertFloor(12)); // 13

//------------Задание 7-------------

// function transformArray(arr, index1, index2, adding) {
//   let array = arr;
//   let change = array[index1];
//   array[index1] = array[index2];
//   array[index2] = change;
  
//   return array.map(item => {
//     return item + adding;
//   });
// }

// console.log(transformArray(["fngp", "kgei", "fpos", "clfw"], 2, 3, "green"));
// console.log(transformArray(["aaa", "bbb", "ccc", "ddd"], 0, 3, "-444"));

//------------Задание 8-------------

function digital_root(num) {
  let arr = String(num).split('');
  let finalResult;
  let result = arr.reduce((sum, current) => sum + +current, 0);
//   for (let i = 0; i < arr.length; i++) {
//   result += +arr[i];
// }
  
  if (result > 9) {
   finalResult = digital_root(result);
  } else {
    return result;
  }
  return finalResult;
}

console.log(digital_root(16)); // 7
console.log(digital_root(136)); // 1

console.log(digital_root(16)); // 7
console.log(digital_root(136)); // 1
console.log(digital_root(16669)); // 1 
console.log(digital_root(7389)); // 9 
console.log(digital_root(12803)); // 5
