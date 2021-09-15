import {commandeDetail} from "../vues/commandevues.js"
import {commandeTotal} from "../vues/commandevues.js"
import {getCommande} from "../api/api.js"

getCommande().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("commande-detail").appendChild(commandeDetail(camera));
    });
    document.getElementById("commande-total").appendChild(commandeTotal(cameras))
})