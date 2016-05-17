import { Content, shuffle } from '~/components';

export default {

  path: '/sort-visualization/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        const arr = Array.from(Array(50).keys());
        shuffle(arr);
        try {
          resolve({
            title: 'Contents',
            component: Content,
            props: {arr: arr},
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
