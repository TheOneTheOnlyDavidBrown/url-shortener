import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RedirectTinyUrlRoute extends Route {
  @service tinyUrl;
  redirect({tiny_url}) {
    this.tinyUrl.redirectUrl(tiny_url)
  }
}
