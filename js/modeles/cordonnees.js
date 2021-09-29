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

    estPlein() {
      return this.donnees.length !== 0;
    }

    estVide() {
      return this.donnees.length === 0;
    }

    enregistrerCordonnees(formulaire) {
      this.donnees.splice(0, 1, formulaire)
      localStorage.setItem("cordonnees", JSON.stringify(this.donnees))
    }

    supprimerCordonnees() {
        localStorage.removeItem("cordonnees", JSON.stringify(this.donnees))
      }
  }