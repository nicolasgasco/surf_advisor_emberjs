import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SpotRoute extends Route {
  @service store;
}
