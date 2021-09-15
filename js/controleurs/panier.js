import {panierDetail} from "../vues/paniervues.js"
import {panierTotal} from "../vues/paniervues.js"
import {getPanier} from "../api/api.js"

getPanier().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("panier-detail").appendChild(panierDetail(camera));  
    });
    document.getElementById("panier-total").appendChild(panierTotal(cameras));
})