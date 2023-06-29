let number = process.argv[2];
let numbers = [];
let count = 0;

function num(count) {
  if (count < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(count); i++) {
    if (count % i === 0) {
      return false;
    }
  }
  numbers.push(count);
  return true;
}

function num_array() {
  while (numbers.length < number) {
    count += 1;
    num(count);
  }
  return numbers
}

console.log(num_array());