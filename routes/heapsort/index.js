import { Heap } from '~/components';

export default {

  path: '/sort-visualization/heapsort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Heap,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
