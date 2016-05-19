---
title: Quick Sort
---

#### Code

``` js
const partition = (arr, l, h) => {
  swap(arr, random(l, h), h);
  const pivot = arr[h];
  let i = l;
  for (let j = l; j < h; j++) {
    if (arr[j] <= pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, h);
  return i;
};

const quickSort = (arr, l=0, h=arr.length-1) => {
  if (l < h) {
    const p = partition(arr, l, h);
    quickSort(arr, l, p - 1);
    quickSort(arr, p + 1, h);
  }
};
```

#### Notes

```
Time:
    Worst : O(n^2)
  Average : O(n log(n))
     Best : O(n log(n))

Space: O(log(n))
```
