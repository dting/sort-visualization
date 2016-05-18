---
title: Heap Sort
---

#### Code

``` js
/**
 * A binary tree can be represented in an array where:
 * - parent = i
 * - parent.left = 2i + 1
 * - parent.right = 2i + 2
 */

const left = i => 2 * i + 1;
const right = i => 2 * i + 2;

const buildHeap = arr => {
  for (let i = Math.floor((arr.length - 1) / 2); i > -1; i--) {
    heapify(arr, i);
  }
};

const heapify = (arr, i, size=arr.length) => {
  let l = left(i);
  let r = right(i);
  let largest = i;
  if (l < size && arr[l] > arr[i]) {
    largest = l
  }
  if (r < size && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, largest, size);
  }
};

const heapSort = arr => {
  buildHeap(arr);
  for (let i = arr.length-1; i > 0; i--) {
    swap(arr, 0, i);
    heapify(arr, 0, i);
  }
};
```

#### Notes

```
Time:
    Worst : O(n log(n))
  Average : O(n log(n))
     Best : O(n log(n))

Space: O(1)
```
