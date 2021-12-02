// Estruturado

function fib1(n) {
  const values = [1, 1];

  while (values.length < n) {
    values.push(values[values.length - 1] + values[values.length - 2]);
  }

  return values[n - 1];
}

// Recursivo

function fib2(n) {
  if (n === 1 || n == 2) {
    return 1;
  } else {
    return fib2(n - 1) + fib2(n - 2);
  }
}
