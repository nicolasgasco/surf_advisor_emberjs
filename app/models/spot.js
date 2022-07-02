import Model, { attr } from '@ember-data/model';

export default class SpotModel extends Model {
  @attr('string') country;
  @attr('string') region;
  @attr('string') name;
  @attr webcams;
}
