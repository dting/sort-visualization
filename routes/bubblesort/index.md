---
title: Bubble Sort
---

#### Code

``` js
const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    let counter = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        counter++;
      }
    }
    if (!counter) {
      break;
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
