import { SortInfo } from '~/components';

export default {

  path: '/sort-visualization/quicksort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          content.type = 'quicksort';
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
