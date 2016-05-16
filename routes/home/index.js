import { Content } from '~/components';

export default {

  path: '/sort-visualization/',

  async action() {
    return new Promise((resolve, reject) => {
      require.ensure([], require => {
        try {
          resolve({
            title: 'Contents',
            component: Content,
            props: {},
          });
        } catch (err) {
          reject(err);
        }
      });
    });
  },

};
