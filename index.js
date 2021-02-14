// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
  
// }

// console.log(pow(2, 2));
// console.log(pow(2, 3));


//-----------Задача 1------------

// function printMessage(n) {
// let time = n * 1000;
// let timerId = setInterval(() => alert('Second'), time);


// setTimeout(() => {clearInterval(timerId)}, 10000);

// }

// printMessage(5);


//-----------Задача 2------------

// function message() {
//   setTimeout(alert("прошло 5 секунд"), 5000);
// }


// message();

//-----------Задача 3------------

// function printNumbers(from, to) {
//     for(let i = from; i <= to; i++) {
//       setTimeout(alert(i), 1000);
//     }
// }

// printNumbers(11, 15);

//-----------Задача 4------------

btn.onclick = function showMessage() {
  let loading = document.getElementById('loading');
  let message = document.getElementById('message');
   
  loading.style.top = '50px';
  setTimeout(() => {
    message.style.display = "block";
    loading.style.top = '1000px';
  }, 5000);
  
};
