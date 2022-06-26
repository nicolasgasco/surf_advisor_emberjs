import EmberRouter from '@ember/routing/router';
import config from 'surf-advisor-emberjs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/:lang' });
  this.route('index', { path: '/' });
  this.route('about');
});
