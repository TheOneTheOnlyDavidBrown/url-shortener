import Model, { attr } from '@ember-data/model';

export default class TinyUrlModel extends Model {
  @attr tiny_url;
  @attr long_url;
}
