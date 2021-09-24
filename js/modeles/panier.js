/**
  produit = {
    _id: string,
    name: string,
    lenses: string,
    lenses_id: integer,
    price: integer,
    number: integer
  }
**/

export class Panier {
  constructor() {
    this.recharger()
  }

  ajouterUnProduit(produit) {
    this.recharger();

    if (this.donnees.find (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))) {
      let index = this.donnees.findIndex (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))
      produit.number += this.donnees[index].number
      this.donnees.splice(index, 1, produit)
    }else{
      this.donnees.push(produit);
    };

    this.enregistrer();
  }

  supprimerProduit(id, lenses_id){
    // let index = this.donnees.findIndex (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))
    // produit.number += this.donnees[index].number
    // this.donnees.splice(index, 1, produit)
    
    // chercher dans this.donnees le couple _id + lense et le supprimer
  }

  enregistrer() {
    localStorage.setItem("panier", JSON.stringify(this.donnees));
  }

  recharger() {
    this.donnees = JSON.parse(localStorage.getItem("panier")) || [];
  }

  estVide() {
    return this.donnees.length === 0;
  }

  montantTotal() {
    let total = 0;
    this.donnees.forEach(appareil => {
      total += appareil.number * appareil.price;
    });
    return total;
  }
}