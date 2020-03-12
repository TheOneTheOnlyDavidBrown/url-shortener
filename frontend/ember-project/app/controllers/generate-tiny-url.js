import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class GenerateTinyUrlController extends Controller {
  @service tinyUrl;

  @action
  onGenerateUrl() {
      const long_url = this.get('url');
      if (!long_url) {
          this.set('error', 'Must enter URL to generate.');
          return;
      }
      this.tinyUrl.generateTinyUrl(long_url).then((response) => {
        const localUrl = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');
        this.set('shortend_url', `${localUrl}/${response.tiny_url}`);
        this.set('url', '');
        this.store.createRecord('tiny_url', response)
      });
      this.set('error', '');
  }
}
