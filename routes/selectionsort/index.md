---
title: Selection Sort
---

#### Code

``` js
const selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }
    swap(arr, smallestIndex, i);
  }
};
```
``` js
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallest = arr[i];
    var smallestIndex = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] <= smallest) {
        smallest = arr[j];
        smallestIndex = j;
      }
    }
    swap(arr, smallestIndex, i);
  }
}
```
