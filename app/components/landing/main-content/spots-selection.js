import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SpotsSelectionComponent extends Component {
  @action
  handleSpotSelectionSubmit(e) {
    e.preventDefault();
  }
}
