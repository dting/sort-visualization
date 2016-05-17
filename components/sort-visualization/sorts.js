import { swap, rand, randIn } from './utils';

export function *bubblesort({ arr, highlights }) {
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

export function *insertionsort({ arr, highlights }) {
  for (let i = 1; i < arr.length; i++) {
    highlights.i = i;
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      yield;
      highlights.j = j;
      highlights.smallest = j - 1;
      swap(arr, j, j - 1);
      yield;
    }
  }
};

export function *selectionsort({ arr, highlights }) {
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

export function *quicksort({ arr, highlights }) {
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h } = stack.pop();
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

const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

export function *heapsort({ arr, highlights }) {
  for (let i = Math.floor((arr.length - 1) / 2); i > -1; i--) {
    highlights.i = i;
    let stack = [{ j: i, size: arr.length }];
    while (stack.length) {
      let { j, size } = stack.pop();
      let l = left(j);
      let r = right(j);
      let largest = j;
      highlights.smallest = l;
      highlights.largest = r;
      highlights.j = j;

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
    highlights.i = i;
    swap(arr, 0, i);
    yield;
    let stack = [{ j: 0, size: i }];
    while (stack.length) {
      let { j, size } = stack.pop();
      let l = left(j);
      let r = right(j);
      let largest = j;
      highlights.smallest = l < size ? l : -1;
      highlights.largest = r < size ? r : -1;
      highlights.j = j;

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
};

export function *mergesort({ arr, aux, highlights, auxHighlights }) {
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h, action } = stack.pop();
    highlights.smallest = l;
    highlights.largest = h;
    if (action === 'merge') {
      const m = Math.floor((h - l) / 2) + l;
      let i = l;
      let j = m;
      let pos = l;

      while (i < m && j <= h) {
        yield;
        highlights.i = i;
        highlights.j = j;
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
        highlights.i = i;
        highlights.j = j;
      }

      while (j <= h) {
        yield;
        aux[pos++] = arr[j++];
        highlights.i = i;
        highlights.j = j;
      }

      for (let k = l; k <= h; k++) {
        arr[k] = aux[k];
        aux[k] = 99;
      }

      highlights.i = -1;
      highlights.j = -1;
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
};
