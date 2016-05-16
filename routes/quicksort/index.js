import { Quick } from '~/components';

export default {

  path: '/sort-visualization/quicksort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Quick,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
