import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class AsideComponent extends Component {
  @service router;

  @action
  onClickBackButton() {
    this.router.transitionTo('/');
  }
}
