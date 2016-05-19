import { swap, rand, randIn } from './utils';

export function *bubblesort({ arr, meta }) {
  let comparisons = 0;
  let swaps = 0;
  meta.status = 'bubble';
  for (let i = arr.length - 1, counter = 1; i > 0 && counter; i--) {
    counter = 0;
    meta.i = i;
    for (let j = 0; j < i; j++) {
      yield;
      meta.j = j;
      meta.largest = j + 1;
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        counter++;
        swaps++;
        swap(arr, j, j + 1);
        yield;
      }
    }
  }

  meta.status = `s: ${swaps} c: ${comparisons}`;
};

export function *insertionsort({ arr, meta }) {
  let comparisons = 0;
  let swaps = 0;
  meta.status = 'insert';
  for (let i = 1; i < arr.length; i++) {
    meta.i = i;
    meta.smallest = i - 1;
    yield;
    comparisons++;
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      yield;
      comparisons++;
      meta.j = j;
      meta.smallest = j - 1;
      swaps++;
      swap(arr, j, j - 1);
      yield;
    }
  }

  meta.status = `s: ${swaps} c: ${comparisons}`;
};

export function *selectionsort({ arr, meta }) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = 0; i < arr.length; i++) {
    meta.status = 'select';
    let smallest = arr[i];
    let smallestIndex = i;

    meta.i = i;
    meta.smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      meta.j = j;
      yield;
      comparisons++;
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
        meta.smallest = j;
      }
    }

    meta.status = 'swap';
    swaps++;
    swap(arr, smallestIndex, i);
    yield;
  }

  meta.status = `s: ${swaps} c: ${comparisons}`;
};

export function *quicksort({ arr, meta }) {
  let comparisons = 0;
  let swaps = 0;
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h } = stack.pop();
    if (l < h) {
      meta.status = 'pick pivot';
      meta.smallest = l;
      meta.largest = h;

      // Use median of 3 as pivot.
      const pivotArr = [randIn(l, h), randIn(l, h), randIn(l, h)];
      pivotArr.sort((a, b) => arr[a] - arr[b]);

      swap(arr, pivotArr[1], h);
      swaps++;
      yield;

      let pivotIndex = l;
      let pivotValue = arr[h];
      meta.i = pivotIndex;
      meta.status = 'partition';
      for (let j = l; j < h; j++) {
        meta.j = j;
        yield;
        comparisons++;
        if (arr[j] <= pivotValue) {
          swaps++;
          swap(arr, pivotIndex, j);
          yield;
          pivotIndex++;
          meta.i = pivotIndex;
        }
      }

      swaps++;
      swap(arr, pivotIndex, h);
      yield;
      stack.push({ l: pivotIndex + 1, h: h });
      stack.push({ l: l, h: pivotIndex - 1 });
    }
  }

  meta.status = `s: ${swaps} c: ${comparisons}`;
};

const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

export function *heapsort({ arr, meta }) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = Math.floor((arr.length - 1) / 2); i > -1; i--) {
    meta.status = 'build heap';
    meta.i = i;
    let stack = [{ j: i, size: arr.length }];
    while (stack.length) {
      let { j, size } = stack.pop();
      let l = left(j);
      let r = right(j);
      let largest = j;
      meta.smallest = l;
      meta.largest = r;
      meta.j = j;

      yield;
      comparisons++;
      if (l < size && arr[l] > arr[largest]) {
        largest = l;
      }

      yield;
      comparisons++;
      if (r < size && arr[r] > arr[largest]) {
        largest = r;
      }

      if (largest !== j) {
        swaps++;
        swap(arr, j, largest);
        yield;
        stack.push({ j: largest, size: size });
      }
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    meta.status = 'swap';
    meta.i = i;
    swaps++;
    swap(arr, 0, i);
    yield;
    meta.status = 'heapify';
    let stack = [{ j: 0, size: i }];
    while (stack.length) {
      let { j, size } = stack.pop();
      let l = left(j);
      let r = right(j);
      let largest = j;
      meta.smallest = l < size ? l : -1;
      meta.largest = r < size ? r : -1;
      meta.j = j;

      yield;
      comparisons++;
      if (l < size && arr[l] > arr[largest]) {
        largest = l;
      }

      yield;
      comparisons++;
      if (r < size && arr[r] > arr[largest]) {
        largest = r;
      }

      if (largest !== j) {
        swaps++;
        swap(arr, j, largest);
        yield;
        stack.push({ j: largest, size: size });
      }
    }
  }

  meta.status = `s: ${swaps} c: ${comparisons}`;
};

export function *mergesort({ arr, aux, meta, auxmeta }) {
  let comparisons = 0;
  let merges = 0;
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    meta.status = 'sort';
    let { l, h, action } = stack.pop();
    meta.smallest = l;
    meta.largest = h;
    if (action === 'merge') {
      meta.status = 'merge';
      const m = Math.floor((h - l) / 2) + l;
      let i = l;
      let j = m;
      let pos = l;

      while (i < m && j <= h) {
        meta.i = i;
        meta.j = j;
        yield;
        comparisons++;
        merges++;
        if (arr[i] > arr[j]) {
          aux[pos++] = arr[j++];
        } else {
          aux[pos++] = arr[i++];
        }
      }

      meta.i = -1;
      meta.j = -1;

      while (i < m) {
        merges++;
        aux[pos++] = arr[i++];
      }

      while (j <= h) {
        merges++;
        aux[pos++] = arr[j++];
      }

      for (let k = l, count = 0; k <= h; k++, count++) {
        arr[k] = aux[k];
        aux[k] = 99;

        // Yield every other index to simulate same write speed as swap.
        if (count % 2 === 0) yield;
      }
    } else {
      if (h - l === 1) {
        yield;
        comparisons++;
        merges++;
        if (arr[l] > arr[h]) {
          aux[l] = arr[h];
          aux[h] = arr[l];
        } else {
          aux[l] = arr[l];
          aux[h] = arr[h];
        }

        yield;
        arr[l] = aux[l];
        aux[l] = 99;
        arr[h] = aux[h];
        aux[h] = 99;
      } else if (h - l > 1) {
        const m = Math.floor((h - l) / 2) + l;
        stack.push({ l: l, h: h, action: 'merge' });
        stack.push({ l: m, h: h });
        stack.push({ l: l, h: m - 1 });
      }
    }
  }

  meta.status = `m: ${merges} c: ${comparisons}`;
};

export function *bogosort({ arr, meta }) {
  const h = arr.length - 1;
  meta.i = 0;
  meta.j = h;
  let i = 0;
  while (i <= h) {
    let j = i + 1;
    meta.status = 'check';
    meta.smallest = i;
    meta.largest = j;
    yield;
    if (arr[i] > arr[j]) {
      meta.status = 'shuffle';
      for (let si = 0; si <= h; si++) {
        meta.smallest = si;
        let r = randIn(si, h);
        meta.largest = r;
        yield;
        swap(arr, r, si);
        yield;
      }

      i = 0;
    } else {
      i++;
    }
  }

  meta.status = 'done';
};
