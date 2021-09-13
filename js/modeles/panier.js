export class panier {
    constructor(data) {
        this.lenses = data.lenses || [];
        this._id = data._id || null;
        this.name = data.name || null;
        this.price = data.price/100 || 0;
        this.number = data.number || 0;
    }
}