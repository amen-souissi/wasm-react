function test(i: i32): f32 {
  return ((i as f32) * 2) / 4;
}

// Data structure is important Array vs Float32Array

export function helperArray(): Array<number> {
  let array: Array<number> = [];
  for (let i = 0; i <= 1000000; i++) {
    array[i] = test(i);
  }
  return array;
}

export function helperFloatArray(): Float32Array {
  let array = new Float32Array(1000001);
  for (let i = 0; i <= 1000000; i++) {
    array[i] = test(i);
  }

  return array;
}
