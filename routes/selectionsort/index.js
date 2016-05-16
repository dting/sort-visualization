import { Selection } from '~/components';

export default {

  path: '/sort-visualization/selectionsort/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Selection,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
