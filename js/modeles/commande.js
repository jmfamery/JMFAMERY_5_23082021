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

// fichier de la dernière commande passée
export class Commande {
  constructor() {
    this.recharger()
  }

  recharger() {
    this.donnees = JSON.parse(sessionStorage.getItem("commande")) || []
  }

  enregistrer() {
    sessionStorage.setItem("commande", JSON.stringify(this.donnees))
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
    sessionStorage.removeItem("commande", JSON.stringify(this.donnees))
  }
}