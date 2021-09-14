import {commandeDetail} from "../vues/commandevues.js"
import {getCommandeDetail} from "../api/api.js"

getCommandeDetail().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("commande-detail").appendChild(commandeDetail(camera));
    });
})

import {commandeTotal} from "../vues/commandevues.js"
import {getCommandeTotal} from "../api/api.js"

getCommandeTotal().then((camera) => {
    document.getElementById("commande-total").appendChild(commandeTotal(camera))
    }
)