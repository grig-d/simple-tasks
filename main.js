// #1
function isPalindrome(text) {
  return text === text.split('').reverse().join('');
}

console.log(`is palindrome: 'night'`, '>>>', isPalindrome('night'));
console.log(`is palindrome: '12321'`, '>>>', isPalindrome('12321'));
console.log(`is palindrome: 'шалаш'`, '>>>', isPalindrome('шалаш'));

// // // //
console.log('// // // //');
// // // //

// #2
function findShortestWord(text) {
  const words = text.split(' ').sort((a, b) => a.length - b.length);
  const shortestWord = words[0];
  return shortestWord;
}

console.log(
  'Find the shortest word in this sentence',
  '>>>',
  findShortestWord('Find the shortest word in this sentence'),
);
console.log('Just test string', '>>>', findShortestWord('Just test string'));

// // // //
console.log('// // // //');
// // // //

// #3
function toInitials(string = '') {
  if (string.length === 0) return;
  const array = string.split(' ');
  const result = `${array[0][0]}.${array[1][0]}.`.toUpperCase();
  return result;
}

console.log('Bill Gates', '>>>', toInitials('Bill Gates')); // B.G.
console.log('elon musk', '>>>', toInitials('elon musk')); // E.M.

// // // //
console.log('// // // //');
// // // //

// #4
function sumDigits(inputNumber) {
  const absNumber = Math.abs(inputNumber);
  const digits = absNumber.toString().split('');
  const result = digits.reduce(
    (accumulator, current) => accumulator + Number(current),
    0,
  );
  return result;
}

console.log('sum of digits 99', '>>>', sumDigits(99)); // 18
console.log('sum of digits -32', '>>>', sumDigits(-32)); // 5

// // // //
console.log('// // // //');
// // // //

// #5
function minMax(inputArray) {
  const result = [Math.min(...inputArray), Math.max(...inputArray)];
  return result;
}

console.log(minMax([2, 9, 10, 25, 47, 4, 1])); // [7,47]
console.log(minMax([2, 1])); // [1,2]
console.log(minMax([1])); // [1,1]

// // // //
console.log('// // // //');
// // // //

// #6
function accum () {
  // body
}

console.log(accum('abcd')); // "A-Bb-Ccc-Dddd"
console.log(accum('cwAt')); // "C-Ww-Aaa-Tttt"

// https://www.youtube.com/watch?v=IooJ3P2VUYs&list=PLNkWIWHIRwMFSLI9wBuHxuGI5lAZ7QNUg&index=7

//

// https://www.youtube.com/watch?v=qB2xv2CwAE8&list=WL&index=179
// https://github.com/YauhenKavalchuk/interview-questions

/*
function QuickSort(original) {
  const left = [];
  const pivot = original.pop();
  const right = [...original];
  console.log(left);
  console.log(pivot);
  console.log(right);

  // if(original.length < 2) {return original}
  return [...left, pivot, ...right];
}

// console.log(QuickSort([2]));
console.log(QuickSort([1,2]));
*/


////////////////
// palindrome checking


////Слова в двоичный код
// Напишите функцию, которая принимает строку и возвращает массив, состоящий из двоичных чисел, соответствующих ASCII коду символов строки.
// Пример:
//  'man' => [ '01101101', '01100001', '01101110' ]

// дано массив [1,2,1,2,3,5]
// Превратить его в объект с подсчетом повторов
// {
//   1: 2,
//   2: 2,
//   3: 1,
//   5: 1
// }


// Отфильтровать длинные слова
// Задача проста - напишите функцию, которая принимает строку, состоящую из слов и число.  Функция должна вернуть массив слов, длина которых больше данного числа.
// Пример:
//  filterLongWords("The quick brown fox jumps over the lazy dog", 4) 
//['quick', 'brown', 'jumps']


//  Наибольшее и наименьшее
// Вам дана строка, состоящая из цифр, разделенных пробелами. Напишите функцию, которая обработает строку и вернет наибольшее и наименьшее число.
// Примеры:
//  highAndLow("1 2 3 4 5");  // return "5 1"
//  highAndLow("1 2 -3 4 5"); // return "5 -3"
//  highAndLow("1 9 3 4 -5"); // return "9 -5"


// Убрать минимум
// Напишите функцию, которая принимает массив чисел, обрабатывает его и возвращает новый массив, в котором не будет самого меньшего числа из данного массива. Если наименьших чисел несколько, функция должна убрать число с наименьшим индексом.
// Примеры:
//  removeSmallest([1,2,3,4,5]) = [2,3,4,5]
//  removeSmallest([5,3,2,1,4]) = [5,3,2,4]
//  removeSmallest([2,2,1,2,1]) = [2,2,2,1]

// Строка заканчивается на
// Вам даны две строки. Напишите функцию, которая проверит заканчивается ли первая строка второй строкой.
// Примеры:
//  solution('abc', 'bc') // returns true
//  solution('abc', 'd') // returns false