import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class LanguageSelectorComponent extends Component {
  @service intl;
  @service router;

  @tracked selectedLang = this.intl.locale[0].split('-')[0];

  @action
  setSelectedLang(event) {
    this.selectedLang = event.target.value;
    console.log("mierda\n");
    this.router.transitionTo(`/${this.selectedLang}`);
  }
}
