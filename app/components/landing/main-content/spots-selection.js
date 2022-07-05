import Component from '@glimmer/component';
import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SpotsSelectionComponent extends Component {
  @service store;
  @service router;

  @tracked selectedCountry = 'es';
  @tracked selectedRegion = 'bizkaia';
  @tracked selectedSpotId = '1';

  get allSpots() {
    return this.args.spots;
  }

  get countries() {
    const countries = this.allSpots.map((spot) => {
      return spot.get('country');
    });

    const singleOccurrenceCountries = [...new Set(countries)];

    return singleOccurrenceCountries.sort();
  }

  get regions() {
    const regions = this.allSpots
      .filter((spot) => {
        return spot.get('country') === this.selectedCountry;
      })
      .map((spot) => {
        return spot.get('region');
      });

    const singleOccurrenceRegions = [...new Set(regions)];

    return singleOccurrenceRegions.sort();
  }

  get spotNames() {
    const spotNames = this.allSpots
      .filter((spot) => {
        return spot.get('region') === this.selectedRegion;
      })
      .map((spot) => {
        return { name: spot.get('name'), id: spot.get('id') };
      });
    return spotNames.sort();
  }

  @action
  handleSpotSelectionSubmit(e) {
    e.preventDefault();
    this.router.transitionTo('spot', this.selectedSpotId);
  }

  @action
  selectCountryHandler(e) {
    this.selectedCountry = e.target.value.toLowerCase();
  }

  @action
  selectRegionHandler(e) {
    this.selectedRegion = e.target.value.toLowerCase();
  }

  @action
  selectSpotNameHandler(e) {
    console.log(e.target.value);
    this.selectedSpotId = e.target.value;
  }
}
