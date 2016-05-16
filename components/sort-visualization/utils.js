export const rand = i => Math.floor(Math.random() * i);

export const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

export const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, i, rand(i - 1));
  }
};
