import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service intl;
  @service store;

  beforeModel() {
    this.intl.setLocale(['es-us']);
  }

  model(params) {
    switch (params.lang) {
      case 'en':
        this.intl.setLocale(['en-us']);
        document.documentElement.setAttribute('lang', 'en');
        break;
      case 'es':
        this.intl.setLocale(['es-es']);
        document.documentElement.setAttribute('lang', 'es');
        break;
      default:
        this.intl.setLocale(['en-us']);
        document.documentElement.setAttribute('lang', 'en');
    }

    return this.store.findAll('spot');
  }
}
