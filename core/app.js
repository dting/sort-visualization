import 'babel-polyfill';
import { createApp } from 'react-app';
import routes from '../routes';

createApp({
  routes,
  container: document.getElementById('container'),
});
