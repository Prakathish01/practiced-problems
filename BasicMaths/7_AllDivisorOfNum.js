function printDivisors(n) {
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);          // First divisor

      if (i !== n / i) {
        console.log(n / i);    // Second divisor (pair)
      }
    }
  }
}

printDivisors(28);