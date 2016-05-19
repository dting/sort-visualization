import { SortInfo } from '~/components';

export default {

  path: '/sort-visualization/bubblesort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        const best = Array.from(Array(100).keys());
        const worst = best.slice().reverse();
        try {
          const content = require('./index.md');
          content.type = 'bubblesort';
          content.best = best;
          content.worst = worst;
          resolve({
            title: content.title,
            component: SortInfo,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
