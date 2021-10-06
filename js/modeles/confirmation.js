// fichier de retour de la validation de la commande au Back-end
export class Confirmation {
  constructor(data) {
    this.contact = data.contact || [];
    this.products = data.products || [];
    this.orderId = data.orderId || null;
  }
}