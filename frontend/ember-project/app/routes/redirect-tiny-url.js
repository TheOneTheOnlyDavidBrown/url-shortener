import Route from '@ember/routing/route';

export default class RedirectTinyUrlRoute extends Route {
    model({tiny_url}){
        // SHOULD BE PULLING URL FROM ENV VARIABLE
        fetch('http://localhost:3000/api/v1/tiny_urls/'+tiny_url, {
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
