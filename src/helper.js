function test(i) {
  return (i * 2) / 4;
}

export function helperArray() {
  let array = [];
  for (let i = 0; i <= 1000000; i++) {
    array[i] = test(i);
  }
  return array;
}
