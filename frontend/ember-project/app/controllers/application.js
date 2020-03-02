import { action } from '@ember/object';
import Controller from '@ember/controller';

export default class Application extends Controller {
    @action
    onGenerateUrl() {
        const long_url = this.get('url');
        if (!long_url) {
            this.set('error', 'Must enter URL to generate.');
            return;
        }
        this.set('error', '');
        fetch('http://localhost:3000/api/v1/tiny_urls', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({long_url}),
        })
            .then((response) => response.json())
            .then((response) =>{
                // SHOULD BE PULLING URL FROM ENV VARIABLE
                this.set('shortend_url', `localhost:4200/${response.tiny_url}`);
                this.set('url', '');
                this.store.createRecord('tiny_url', response)
            })
            .catch((error) => this.set('error', 'Error generating short URL. Make sure you have http or https in your URL'));
    }
    @action
    onUrlChange(text) {
        this.set('url', text);
    }
}
