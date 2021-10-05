export class Order {
  constructor() {
    this.recharger()
  }
 
  recharger() {
    this.donnees = JSON.parse(sessionStorage.getItem("order")) ||  {
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
    sessionStorage.setItem("order", JSON.stringify(this.donnees))
  }

  supprimer() {
    sessionStorage.removeItem("order", JSON.stringify(this.donnees))
  }
}