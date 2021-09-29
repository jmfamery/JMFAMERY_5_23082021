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
      this.donnees = JSON.parse(sessionStorage.getItem("cordonnees")) ||  {
        prenom: "",
        nom: "",
        mail: "",
        adresse: "",
        code_postal: "",
        ville: ""
      };
    }

    valider(){
      const erreurs = [];
      if(this.donnees.prenom.length < 2){
        erreurs.push({entree: "prenom", "message" :  "Le prenom est trop court !"})
      } else {
        if(this.donnees.nom = RegExp(/\d/)){
          erreurs.push('Le nom est trop court !')
        }
      }
      console.log(erreurs);
      return erreurs;
    }

    enregistrerCordonnees() {
      sessionStorage.setItem("cordonnees", JSON.stringify(this.donnees))
    }

    supprimerCordonnees() {
      sessionStorage.removeItem("cordonnees", JSON.stringify(this.donnees))
    }
  }