// fichier pour validation de la commande au Back-end
export class Transfert {
  constructor() {
    this.recharger()
  }
 
  recharger() {
    this.donnees = JSON.parse(sessionStorage.getItem("transfert")) ||  {
      contact : {
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        email : ""
      },
      products : []
    }
  }

  enregistrer() {
    sessionStorage.setItem("transfert", JSON.stringify(this.donnees))
  }

  supprimer() {
    sessionStorage.removeItem("transfert", JSON.stringify(this.donnees))
  }
}