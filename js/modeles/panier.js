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

// fichier contenant le panier des appareils photos
export class Panier {
  constructor() {
    this.recharger()
  }

  recharger() {
    this.donnees = JSON.parse(localStorage.getItem("panier")) || []
  }

  enregistrer() {
    localStorage.setItem("panier", JSON.stringify(this.donnees))
  }
  
  estVide() {
    return this.donnees.length === 0;
  }

  montantTotal() {
    let total = 0;
    this.donnees.forEach(appareil => {
      total += appareil.number * appareil.price
    })
    return total
  }

  ajouterUnProduit(produit) {
    if (this.donnees.find (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))) {
      let index = this.donnees.findIndex (base => (base._id + base.lenses_id) == (produit._id + produit.lenses_id))
      produit.number += this.donnees[index].number
      this.donnees.splice(index, 1, produit)
    }else{
      this.donnees.push(produit)
    }
    this.enregistrer()
  }
  
  supprimerUnProduit(idAppareilSupprimer){
    if (this.donnees.find (base => (base._id + base.lenses_id) == (idAppareilSupprimer))) {
      let index = this.donnees.findIndex (base => (base._id + base.lenses_id) == (idAppareilSupprimer))
      console.log("index : ", index)
      console.log("Supprimer ID: ", idAppareilSupprimer)
      console.log("Données ID: ", this.donnees[index]._id + this.donnees[index].lenses_id)
      this.donnees.splice(index, 1)
      this.enregistrer()
    }
  }

  supprimerTousProduits(){
    localStorage.removeItem("panier", JSON.stringify(this.donnees))
  }
}