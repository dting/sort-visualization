import { SortInfo } from '~/components';

export default {

  path: '/sort-visualization/mergesort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          content.type = 'mergesort';
          content.aux = Array(100).fill(99);
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
