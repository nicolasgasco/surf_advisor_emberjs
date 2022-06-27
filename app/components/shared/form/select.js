import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SelectComponent extends Component {
  @tracked
  isSelectOpen = false;

  @action
  toggleIsSelectOpen() {
    this.isSelectOpen = !this.isSelectOpen;
  }
}
