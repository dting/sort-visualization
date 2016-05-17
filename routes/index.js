import home from './home';
import bubblesort from './bubblesort';
import selectionsort from './selectionsort';
import insertionsort from './insertionsort';
import quicksort from './quicksort';
import heapsort from './heapsort';
import mergesort from './mergesort';
import error from './error';

const routes = {

  path: '/',

  children: [
    home,
    bubblesort,
    selectionsort,
    insertionsort,
    quicksort,
    heapsort,
    mergesort,
    error,
  ],

};

export default routes;
