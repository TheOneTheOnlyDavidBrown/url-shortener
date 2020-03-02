import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('redirect_tiny_url', { path: '/:tiny_url' });
  //this.route('redirect_tiny_url');
});
