/**
  formulaire = {
      prenom : string,
      nom : string,
      mail : string,
      adresse : string,
      code_postal : integer,
      ville : string
  }
**/

export class Cordonnees {
    constructor() {
      this.recharger()
    }
   
    recharger() {
      this.donnees = JSON.parse(localStorage.getItem("cordonnees")) || [];
    }

    enregistrer(formulaire) {
      this.donnees.push(formulaire)
      localStorage.setItem("cordonnees", JSON.stringify(this.donnees))
    }

    supprimer() {
        localStorage.removeItem("cordonnees", JSON.stringify(this.donnees))
      }
  }