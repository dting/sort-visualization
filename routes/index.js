import home from './home';
import bubblesort from './bubblesort';
import selectionsort from './selectionsort';
import insertionsort from './insertionsort';
import error from './error';

const routes = {

  path: '/',

  children: [
    home,
    bubblesort,
    selectionsort,
    insertionsort,
    error,
  ],

};

export default routes;
