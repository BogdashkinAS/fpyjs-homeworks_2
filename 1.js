let number = process.argv[2];
let numbers = [];
i = 2;

function num(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  numbers.push(number);
  return true;
}

while (i <= number) {
  num(number - number + i);
  i += 1;
}
console.log(numbers);