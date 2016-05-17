import { swap, rand, randIn } from './utils';

export function *bubblesort(arr, highlights) {
  for (let i = arr.length - 1; i > 0; i--) {
    highlights.i = i;
    for (let j = 0; j < i; j++) {
      yield;
      highlights.j = j;
      highlights.largest = j + 1;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        yield;
      }
    }
  }
};

export function *insertionsort(arr, highlights) {
  for (let i = 1; i < arr.length; i++) {
    highlights.i = i;
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      highlights.j = j;
      highlights.smallest = j - 1;
      yield;
      swap(arr, j, j - 1);
      yield;
    }
  }
};

export function *selectionsort(arr, highlights) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;

    highlights.i = i;
    highlights.smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      highlights.j = j;
      yield;
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
        highlights.smallest = j;
      }
    }

    swap(arr, smallestIndex, i);
    yield;
  }
};

export function *quicksort(arr, highlights) {
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h } = stack.pop();
    yield;
    if (l < h) {
      highlights.smallest = l;
      highlights.largest = h;
      swap(arr, randIn(l, h), h);
      yield;

      let pivotIndex = l;
      let pivotValue = arr[h];
      highlights.i = pivotIndex;
      for (let j = l; j < h; j++) {
        highlights.j = j;
        yield;
        if (arr[j] <= pivotValue) {
          swap(arr, pivotIndex, j);
          yield;
          pivotIndex++;
          highlights.i = pivotIndex;
        }
      }

      swap(arr, pivotIndex, h);
      yield;
      stack.push({ l: pivotIndex + 1, h: h });
      stack.push({ l: l, h: pivotIndex - 1 });
    }
  }
};
