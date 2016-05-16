---
title: Insertion Sort
---

#### Code

``` js
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1);
    }
  }
};
```
``` js
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1);
    }
  }
}
```
