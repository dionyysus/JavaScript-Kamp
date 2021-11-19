function findFriendsNumber(num1, num2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i < num1; i++) {
    if (num1 % i == 0) {
      sum1 += i;
    }
  }

  for (let a = 1; a < num2; a++) {
    let sayac = num2 % a;
    if (sayac == 0) {
      sum2 += a;
    }
  }
  if (sum1 == num2 && sum2 == num1) {
    console.log(num1 + " and " + num2 + " are friends");
  } else {
    console.log(num1 + " and " + num2 + " are not friends");
  }
}

findFriendsNumber(220, 284);
