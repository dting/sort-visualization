import { SortInfo, buildHeap } from '~/components';

export default {

  path: '/sort-visualization/heapsort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        const worst = Array.from(Array(100).keys());
        const best = Array.from(Array(100).keys());
        buildHeap(best);

        try {
          const content = require('./index.md');
          content.type = 'heapsort';
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
