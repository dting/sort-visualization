import home from './home';
import bubblesort from './bubblesort';
import selectionsort from './selectionsort';
import insertionsort from './insertionsort';
import quicksort from './quicksort';
import error from './error';

const routes = {

  path: '/',

  children: [
    home,
    bubblesort,
    selectionsort,
    insertionsort,
    quicksort,
    error,
  ],

};

export default routes;
