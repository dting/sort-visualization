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

##### Without recursion

``` js
const quickSort = arr => {
  const stack = [{ l: 0, h: arr.length - 1 }];
  while (stack.length) {
    let { l, h } = stack.pop();
    if (l < h) {
      swap(arr, random(l, h), h);
      let pivotIndex = l;
      let pivotValue = arr[h];
      for (let j = l; j < h; j++) {
        if (arr[j] <= pivotValue) {
          swap(arr, pivotIndex, j);
          pivotIndex++;
        }
      }

      swap(arr, pivotIndex, h);
      stack.push({ l: pivotIndex + 1, h: h });
      stack.push({ l: l, h: pivotIndex - 1 });
    }
  }
};
```
