// const numbers = [1, 2, 3, 4];

// const reducer = (acc, curr) => {
//   return acc + curr;
// };

// const sum = numbers.reduce(reducer, 0);
// console.log(sum); // 10

const numbers = [5, 12, 3, 21, 7];
const reducer = (acc, curr) => {
  return curr > acc ? curr : acc;
};
const max = numbers.reduce(reducer, numbers[0]);
console.log(max); // 21
