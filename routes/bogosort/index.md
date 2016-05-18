---
title: Bogo Sort
---

#### Code

``` js
const isSorted = arr => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
}

const bogosort = arr => {
  while (!isSorted(arr)) {
    shuffle(arr);
  }
};
```
