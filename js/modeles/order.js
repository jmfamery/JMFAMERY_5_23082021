export class Order {
  constructor() {
    this.contact();
    this.products = []
  }
  contact() {
    this.firstName = "";
    this.lastName = "";
    this.address = "";
    this.city = "";
    this.email = ""
  }
}