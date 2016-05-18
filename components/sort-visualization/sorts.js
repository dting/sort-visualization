import { swap, rand, randIn } from './utils';

export function *bubblesort({ arr, meta }) {
  meta.status = 'bubble';
  for (let i = arr.length - 1; i > 0; i--) {
    meta.i = i;
    for (let j = 0; j < i; j++) {
      yield;
      meta.j = j;
      meta.largest = j + 1;
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        yield;
      }
    }
  }

  meta.status = 'done';
};

export function *insertionsort({ arr, meta }) {
  meta.status = 'insert';
  for (let i = 1; i < arr.length; i++) {
    meta.i = i;
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      yield;
      meta.j = j;
      meta.smallest = j - 1;
      swap(arr, j, j - 1);
      yield;
    }
  }

  meta.status = 'done';
};

export function *selectionsort({ arr, meta }) {
  for (let i = 0; i < arr.length; i++) {
    meta.status = 'select';
    let smallest = arr[i];
    let smallestIndex = i;

    meta.i = i;
    meta.smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      meta.j = j;
      yield;
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
        meta.smallest = j;
      }
    }

    meta.status = 'swap';
    swap(arr, smallestIndex, i);
    yield;
  }

  meta.status = 'done';
};

export function *quicksort({ arr, meta }) {
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h } = stack.pop();
    if (l < h) {
      meta.status = 'pick pivot';
      meta.smallest = l;
      meta.largest = h;
      swap(arr, randIn(l, h), h);
      yield;

      let pivotIndex = l;
      let pivotValue = arr[h];
      meta.i = pivotIndex;
      meta.status = 'partition';
      for (let j = l; j < h; j++) {
        meta.j = j;
        yield;
        if (arr[j] <= pivotValue) {
          swap(arr, pivotIndex, j);
          yield;
          pivotIndex++;
          meta.i = pivotIndex;
        }
      }

      swap(arr, pivotIndex, h);
      yield;
      stack.push({ l: pivotIndex + 1, h: h });
      stack.push({ l: l, h: pivotIndex - 1 });
    }
  }

  meta.status = 'done';
};

const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

export function *heapsort({ arr, meta }) {
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
      if (l < size && arr[l] > arr[largest]) {
        largest = l;
      }

      yield;
      if (r < size && arr[r] > arr[largest]) {
        largest = r;
      }

      if (largest !== j) {
        swap(arr, j, largest);
        yield;
        stack.push({ j: largest, size: size });
      }
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    meta.status = 'swap';
    meta.i = i;
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
      if (l < size && arr[l] > arr[largest]) {
        largest = l;
      }

      yield;
      if (r < size && arr[r] > arr[largest]) {
        largest = r;
      }

      if (largest !== j) {
        swap(arr, j, largest);
        yield;
        stack.push({ j: largest, size: size });
      }
    }
  }

  meta.status = 'done';
};

export function *mergesort({ arr, aux, meta, auxmeta }) {
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
        yield;
        meta.i = i;
        meta.j = j;
        yield;
        if (arr[i] > arr[j]) {
          aux[pos++] = arr[j++];
        } else {
          aux[pos++] = arr[i++];
        }
      }

      while (i < m) {
        yield;
        aux[pos++] = arr[i++];
        meta.i = i;
        meta.j = j;
      }

      while (j <= h) {
        yield;
        aux[pos++] = arr[j++];
        meta.i = i;
        meta.j = j;
      }

      for (let k = l; k <= h; k++) {
        arr[k] = aux[k];
        aux[k] = 99;
      }

      meta.i = -1;
      meta.j = -1;
    } else {
      if (h - l === 1) {
        yield;
        if (arr[l] > arr[h]) {
          swap(arr, l, h);
        }
      } else if (h - l > 1) {
        const m = Math.floor((h - l) / 2) + l;
        stack.push({ l: l, h: h, action: 'merge' });
        stack.push({ l: m, h: h });
        stack.push({ l: l, h: m - 1 });
      }
    }
  }

  meta.status = 'done';
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
