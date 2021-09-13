export class cordonner {
    constructor(data) {
        this._id = data._id || null;
        this.lastName = data.lastName || null;
        this.firstName = data.firstName || null;
        this.address = data.address || null;
        this.city = data.city || null;
        this.email = data.email || null;
    }
}