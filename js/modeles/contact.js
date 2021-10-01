export class Contact {
  constructor(data) {
    this.firstName = data.firstName || null;
    this.lastName = data.lastName || null;
    this.address = data.address || null;
    this.city = data.city || null;
    this.email = data.email || null;
    this.products = data.products || null;
  }
}