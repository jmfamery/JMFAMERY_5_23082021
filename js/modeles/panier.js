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
    console.log(produit._id + produit.lenses_id);

    this.recharger();

    if (this.donnees.find (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))) {
      console.log("Vrai")
      let index = this.donnees.findIndex (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))
      console.log("Index ", index);
      console.log(this.donnees[index]._id + this.donnees[index].lenses_id);
      produit.number += this.donnees[index].number
      console.log(produit.number)
      console.log("Produit ", produit)
      this.donnees.splice(index, produit)
      console.log("Donnees ", this.donnees[index]);
    }else{
      console.log("Faux")
      this.donnees.push(produit);
    };

  // TODO attention avant d'ajouter un appareil, veirfie qu'il n'est pas deja present ( _id + lense) dans le tableau donnees

    //this.donnees.push(produit);
    this.enregistrer();
  }

  supprimerProduit(id, lenses_id){
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