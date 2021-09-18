export class Camera {
  constructor(data) {
    this._id = data._id || null;
    this.lenses = data.lenses || [];
    this.name = data.name || null;
    this.price = data.price || 0;
    this.description = data.description || null;
    this.imageUrl = data.imageUrl || null
  }
}