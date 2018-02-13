const numArr = process.argv.slice(2).map(num=>{
  return Number(num);
});

const sum = (arr) => {
  const add = (a, b) => {
      return a + b;
  }
  return arr.reduce(add, 0);
}

console.log(sum(numArr));

// console.log(numArr);
