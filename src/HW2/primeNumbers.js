function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

for (let i = 0; i <= 1000; i++) {
  if (isPrimeNumber(i)) {
    console.log(i);
  }
}
