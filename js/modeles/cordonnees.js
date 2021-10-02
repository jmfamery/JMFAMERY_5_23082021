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

      if ((/\D{2,20}/.test(this.donnees.prenom)) == false) {
        erreurs.push("Le prenom est mal saisi ! Il doit avoir entre 2 et 20 caratéress.")
      }

      if ((/\D{2,20}/.test(this.donnees.nom)) == false) {  
        erreurs.push("Le nom est mal saisie ! Il doit avoir entre 2 et 20 caratéres.")
      } 

      if ((/^[^@]+@\w+(\.\w+)+\w$/.test(this.donnees.mail)) == false) {
        erreurs.push("L'adresse mail est mal saisie !")
      }

      if ((/\D{5,30}/.test(this.donnees.adresse)) == false) {  
        erreurs.push("L'adresse est mal saisie ! Il doit avoir entre 5 et 30 caratéres.")
      } 

      if ((/\d{5}/.test(this.donnees.code_postal)) == false) {  
        erreurs.push("Le code postal est mal saisie ! Il doit avoir 5 chiffres.")
      } 

      if ((/\D{2,25}/.test(this.donnees.ville)) == false) {  
        erreurs.push("La ville est mal saisie ! Il doit avoir entre 2 et 25 caratéres.")
      } 

      return erreurs;
    }

    enregistrer() {
      sessionStorage.setItem("cordonnees", JSON.stringify(this.donnees))
    }

    supprimer() {
      sessionStorage.removeItem("cordonnees", JSON.stringify(this.donnees))
    }
  }