import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SpotRoute extends Route {
  @service store;

  model(params) {
    return this.store
      .findRecord('spot', params.spot_id)
      .then(function (spotInfo) {
        return spotInfo;
      });
  }
}
