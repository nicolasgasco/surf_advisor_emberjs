import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'https://surf-advisor-nodejs.herokuapp.com';
  namespace = 'api/v1';
}
