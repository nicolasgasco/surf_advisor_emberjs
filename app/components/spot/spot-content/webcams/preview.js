import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SpotSpotContentWebcamsPreviewComponent extends Component {
  @tracked
  showPreview = false;

  @action
  togglePreview() {
    this.showPreview = !this.showPreview;
  }
}
