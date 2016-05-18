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

#### Notes

```
Time:
    Worst : O(n^2)
  Average : O(n^2)
     Best : O(n)

Space: O(1)
```
