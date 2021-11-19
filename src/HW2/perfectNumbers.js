function findDivisors(num) {
  let sum = 0;
  for (let a = 1; a <= num; a++) {
    let sayac = num % a;
    if (sayac == 0) {
      sum += a;
    }
  }
  return sum;
}

for (let i = 0; i <= 1000; i++) {
  let carp = 2 * i;
  if (findDivisors(i) == carp) {
    console.log(i);
  }
}
