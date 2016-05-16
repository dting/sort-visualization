import { Insertion } from '~/components';

export default {

  path: '/insertionsort',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          const content = require('./index.md');
          resolve({
            title: content.title,
            component: Insertion,
            props: content,
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
