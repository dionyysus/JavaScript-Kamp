function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

function findPrimeNumber(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isPrimeNumber(numbers[i])) {
      console.log(numbers[i] + " is a prime number");
    } else {
      console.log(numbers[i] + " is not a prime number");
    }
  }
}

findPrimeNumber(5, 6, 7, 8);
