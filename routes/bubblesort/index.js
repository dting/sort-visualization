import { Bubble } from '~/components';

export default {

  path: '/sort-visualization/bubblesort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Bubble,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
