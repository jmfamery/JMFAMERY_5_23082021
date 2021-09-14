export class panier {
    constructor(data) {
        this._id = data._id || null;
        this.name = data.name || null;
        this.lenses = data.lenses || [];
        this.number = data.number || 0;
        this.price = data.price/100 || 0;        
    }
}