// Task 1
// При нажатии b-1 выполняете функцию f1. Функция должна вывести в out-1 значение 55 из массива a1. Возвратите это значение.
// Первая задача дана в качестве примера.

function f1() {
  let a1 = [12, [45, 87], [55, 13]];
   return document.querySelector('.out-1').textContent = a1[2][0];
  
}

document.querySelector(".b-1").onclick = f1;

// Task 2
// При нажатии b-2 выполняете функцию f2. Функция должна вывести в out-2 значение aloha из массива a2. Возвратите это значение.

function f2() {
  let a2 = [
    [12, "aloha"],
    [45, 87],
    [55, 13],
  ];
return document.querySelector('.out-2').textContent = a2[0][1];
}

document.querySelector(".b-2").onclick = f2;

// Task 3
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение some из массива a3. Возвратите это значение.

function f3() {
  let a3 = [
    [1, 2, 3],
    [3, 4, 5],
    [6, [7, "some"]],
  ];
    
  return document.querySelector('.out-3').textContent = a3[2][1][1];
} 
document.querySelector(".b-3").onclick = f3;

// Task 4
// При нажатии b-4 выполняете функцию f4. Функция должна вывести в out-4 значение cat из массива a4. Возвратите это значение.

function f4() {
  let a4 = [[1, 2, 3], "cat", [3, 4, 5], [6, [7, "dog"]]];
  return document.querySelector('.out-4').textContent = a4[1];
}

document.querySelector(".b-4").onclick = f4;

// Task 5
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out-5 четные значения из массива a5. Для перебора используем цикл.

function f5() {
  let a5 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [21, 34],
    [44, 56],
  ];
  for(let elem of a5){
    for(let el of elem){
      if(el % 2 == 0){
        document.querySelector('.out-5').textContent += el + ' ';
      }
    }
  }
}

document.querySelector(".b-5").onclick = f5;

// Task 6
// При нажатии b-6 выполняете функцию f6. Функция должна вывести в out-6 нечетные значения из массива a6. Для перебора используем цикл. Делаем по образу предыдущей задачи.

function f6() {
  let a6 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [21, 34],
    [44, 56],
  ];
  for(let elem of a6){
    for(let el of elem){
      if(el % 2 !== 0){
        document.querySelector('.out-6').textContent += `${el} `;
      }
    }
  }
}

document.querySelector(".b-6").onclick = f6;

// Task 7
// При нажатии b-7 выполняете функцию f7. Функция должна вывести в out-7 четные значения из массива a7. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

function f7() {
  let a7 = [
    [1, 2, 3, 9],
    [3, 4, 7],
    [5, 6, 8, 32],
    [21, 34, 43],
    [44, 56],
  ];
  a7.forEach((el) => {
    for(let i of el){
      if(i % 2 == 0){
        document.querySelector('.out-7').textContent += `${i} `;
      }
    }
  })
}

document.querySelector(".b-7").onclick = f7;

// Task 8
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

function f8() {
  let a8 = [
    [1, 2, 3, 9],
    [3, 4, 7],
    [5, 6, 8, 32],
    [21, 34, 43],
    [44, 56],
  ];
  a8.forEach((el) => {
    for(let elem of el){
      if(elem % 2 !== 0){
        document.querySelector('.out-8').textContent += `${elem} `;
      }
    }
  })
}

document.querySelector(".b-8").onclick = f8;

// Task 9
// При нажатии b-9 выполняете функцию f9. Функция должна вывести в out-9 значения из массива a9, которые больше нуля. Используем цикл. Вывод - через пробел.

function f9() {
  let a9 = [
    [-2, 7, -3],
    [3, 4, -7],
    [-5, 6, -8, 32],
    [21, -34, -43],
    [44, -56],
  ];
  for(let el of a9){
    for(let i of el){
      if(i > 0){
        document.querySelector('.out-9').textContent += `${i} `;
      }
    }
  }
}

document.querySelector(".b-9").onclick = f9;

// Task 10
// При нажатии b-10 выполняете функцию f10. Функция должна вывести в out-10 значения из массива a10, которые являются строкой. Используем цикл. Вывод - через пробел.

function f10() {
  let a10 = [
    [-2, "7", -3],
    [3, 4, -7],
    [-5, 6, -8, 32, "a"],
    ["st", 21, -34, -43],
    [44, -56, "task"],
  ];
  a10.forEach((el) => {
    for(let i of el){
      if(typeof i == 'string'){
        document.querySelector('.out-10').textContent += `${i} `;
      }
    }
  })
}

document.querySelector(".b-10").onclick = f10;

// Task 11
// При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.

let a11 = [
  [4, 5, 6],
  [7, 8],
  [9, 10, 11, 12, 13],
];

function f11() {
  for(let el of a11){
    for(let i = el.length - 1; i >= 0; i--){
      document.querySelector('.out-11').textContent += `${el[i]} `;
    }
  }
}

document.querySelector(".b-11").onclick = f11;

// Task 12
// Дан массив a12 который моделирует шахматную доску. Используя цикл выведите в out-12 единицы из этого массива. Все действия в функции f12. Функция запускается при нажатии на b12. Вывод через пробел.

function f12() {
  let a12 = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
  ];
  for(let elem of a12){
    for(let i of elem){
      if(elem[i] == 1){
        document.querySelector('.out-12').textContent += elem[i] + ' ';
      }
    }
  }
}

document.querySelector(".b-12").onclick = f12;

// Task 13
// При нажатии b-13 выполняете функцию f13. Функция должна присвоить переменной a13 массив эмулирующий шахматную доску. Причем массив должен создаваться с помощью циклов. Для проверки - выведите массив в консоль.

let a13 = [];

function f13() {
  let p = 0; //содержится четное или нечетное значение
   for (let i = 0; i < 8; i++) {
     let t = []; //складываем вложенный массивб результат своего рода
     for (let k = 0; k < 8; k++) {
      if ((i % 2 === 0 && k % 2 === 0) || (i % 2 === 1 && k % 2 === 1)){
        p = 0;
      }
      else{
        p = 1;
      }
      t.push(p);
   }
   a13.push(t);
}
console.log(a13);
}

document.querySelector(".b-13").onclick = f13;

// Task 14
// При нажатии b-14 выполняете функцию f14. Функция должна вывести в out-14 длины вложенных в a14 массивов. Через пробел.
// т.е ожидаем 0 2 4 ...

let a14 = [[], [1, 0], [1, 0, 0, 0], [3, 4, 5, 6, 7, 8], [1, 2]];

function f14() {
  for(let elem of a14){
    
      document.querySelector('.out-14').textContent += elem.length + ' ';
    
  }
}

document.querySelector(".b-14").onclick = f14;

// Task 15
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.
// т.е ожидаем 6

let a15 = [[], [1, 0], [1, 0, 0, 0, 0], [3, 4, 5, 6, 7, 8], [1, 2]];

function f15() {
  let res = a15[0].length;
  a15.forEach((elem) =>{
    if(elem.length > res){
      res = elem.length
    }
  })
  document.querySelector('.out-15').textContent = res;
}

document.querySelector(".b-15").onclick = f15;

// Task 16
// Впишите в переменную a16 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
// Ответ в данной задаче прописан сразу. Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a16 = [[2, 7, 4, 6], 5, 9, 8];

console.group(a16);
 console.log(a16[3] == 8);
 console.log(a16[0][1] == 7);
 console.log(a16[0][3] == 6);

console.groupEnd();

// Task 17
// Впишите в переменную a17 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a17 = [[2, 4, 6], [9, 7], 15, [99, 21, 8]];

console.group(a17);
 console.log(a17[3][2] == 8);
 console.log(a17[1][1] == 7);
 console.log(a17[0][2] == 6);

console.groupEnd();

// Task 18
// Впишите в переменную a18 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a18 = [3, 6, [2, 12], 88, [8]];

console.group("Task 18 ================");
 console.log(a18[0] == 3);
 console.log(a18[4][0] == 8);
 console.log(a18[2][1] == 12);

console.groupEnd();

// Task 19
// Впишите в переменную a19 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a19 = [[[2, 3]], [[33, 9, 8]], [5,[12]]];

console.group("Task 19 ================");
 console.log(a19[0][0][1] == 3);
 console.log(a19[1][0][2] == 8);
 console.log(a19[2][1][0] == 12);

console.groupEnd();

// Task 20
// Впишите в переменную a20 массив, который соответствует всем условиям приведенным ниже ( все console.log должны дать true;
//  Т.е вы руками просто пишите массив такой, чтобы условия выполнялись.

let a20 = [22, [1, [3, 9]], [24, 4, 18], 12];

console.group("Task 20 ================");
 console.log(a20[1][1][1] == 9);
 console.log(a20[2][2] == 18);
 console.log(a20[3] == 12);

console.groupEnd();
