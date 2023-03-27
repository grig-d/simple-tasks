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
// hryd
