export const rand = i => Math.floor(Math.random() * i);

export const randIn = (l, h) => Math.floor(Math.random() * (h - l)) + l;

export const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, rand(i - 1));
  }
};

const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const heapify = (arr, i) => {
  let l = left(i);
  let r = right(i);
  let largest = i;
  if (arr[l] > arr[i]) {
    largest = l;
  }

  if (arr[r] > arr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
};

export const buildHeap = arr => {
  for (let i = Math.floor((arr.length - 1) / 2); i > -1; i--) {
    heapify(arr, i);
  }
};
