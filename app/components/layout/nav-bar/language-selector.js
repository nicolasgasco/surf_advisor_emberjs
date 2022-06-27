import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class LanguageSelectorComponent extends Component {
  @service intl;
  @service router;

  @tracked selectedLang = 'en';

  @action
  setSelectedLang(event) {
    this.selectedLang = event.target.value;
    this.router.transitionTo(`/${this.selectedLang}`);
  }
}
