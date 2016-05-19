import { SortInfo } from '~/components';

export default {

  path: '/sort-visualization/quicksort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        const best = Array.from(Array(100).keys());
        try {
          const content = require('./index.md');
          content.type = 'quicksort';
          content.best = best;
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
