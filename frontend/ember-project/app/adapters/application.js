import JSONAPIAdapter from 'ember-data/adapters/json-api';
//import ActiveModelAdapter from 'active-model-adapter';
import { pluralize } from 'ember-inflector'

export default JSONAPIAdapter.extend({
    namespace: "api/v1",
    host: "http://localhost:3000",
    pathForType: function(modelName) {
        console.log('modelName',modelName);
        return pluralize(Ember.String.underscore(modelName));
    },
});
