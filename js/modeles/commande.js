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

export class Commande {
  constructor() {
    this.recharger()
  }

  recharger() {
    this.donnees = JSON.parse(localStorage.getItem("commande")) || []
  }

  enregistrer() {
    localStorage.setItem("commande", JSON.stringify(this.donnees))
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

  supprimer(){
    localStorage.removeItem("commande", JSON.stringify(this.donnees))
  }
}