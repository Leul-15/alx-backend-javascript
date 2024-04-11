export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must');

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
