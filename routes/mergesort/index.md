---
title: Merge Sort
---

#### Code

``` js
const _mergeSort = (v1, v2) => v1 < v2 ? [v1, v2] : [v2, v1];

const _mergeMerge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    result.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
  }
  while (i < arr1.length) {
    result.push(arr1[i++]);
  }
  while (j < arr2.length) {
    result.push(arr2[j++]);
  }
  return result;
};

const mergeSort = (arr, l=0, h=arr.length-1) => {
  if (h - l < 1) return arr.slice(l, h+1);
  if (h - l === 1) return _mergeSort(arr[l], arr[h]);
  const m = Math.floor((h - l) / 2) + l;
  const bottom = mergeSort(arr, l, m-1);
  const top = mergeSort(arr, m, h);
  return _mergeMerge(bottom, top);
};
```
