/**
  produit = {
    _id: string,
    name: string,
    lenses: string,
    price: integer,
    number: integer
  }
**/

export class Panier {
  constructor() {
    this.recharger()
  }

  ajouterUnProduit(produit) {

  // TODO attention avant d'ajouter un appareil, veirfie qu'il n'est pas deja present ( _id + lense) dans le tableau items

    this.items.push(produit);
    this.enregistrer();
  }

  supprimerProduit(id, lense){
    // chercher dans this.items le couple _id + lense et le supprimer
  }

  enregistrer() {
    localStorage.setItem("panier", JSON.stringify(this.items));
  }

  recharger() {
    this.items = JSON.parse(localStorage.getItem("panier")) || [];
  }

  estVide() {
    return this.items.length === 0;
  }

  montantTotal() {
    let total = 0;
    this.items.forEach(appareil => {
      total += appareil.number * appareil.price;
    });
    return total;
  }
}