expensiveFunction(30);

function expensiveFunction(n) {
  let result = 0;
  for (let i = 0; i < Math.pow(2, n); i++) {
      result++;
  }
  return result;
}