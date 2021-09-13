import {panierDetail} from "../vues/paniervues.js"
import {getPanierDetail} from "../api/api.js"

getPanierDetail().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("panier-detail").appendChild(panierDetail(camera));
    });
})

import {panierTotal} from "../vues/paniervues.js"
import {getPanierTotal} from "../api/api.js"

getPanierTotal().then((camera) => {
    document.getElementById("panier-total").appendChild(panierTotal(camera))
    }
)