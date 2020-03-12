import Service from '@ember/service';
import config from './../config/environment';

export default class TinyUrlService extends Service {
  generateTinyUrl(long_url) {
    return fetch(`${config.apiPath}/tiny_urls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({long_url}),
    })
    .then((response) => response.json())
    .catch((error) => this.set('error', 'Error generating short URL. Make sure you have http or https in your URL'));
  }
  redirectUrl(tiny_url){
    return fetch(`${config.apiPath}/tiny_urls/${tiny_url}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((response) =>{
      window.location.replace(response.long_url);
    })
    .catch((error) => this.set('error', error));
  }
}
