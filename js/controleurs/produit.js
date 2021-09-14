import {afficherUnAppareilPhoto} from "../vues/produitvues.js"
import {getOneCamera} from "../api/api.js"

getOneCamera().then((camera) => {
    document.getElementById("appareil").appendChild(afficherUnAppareilPhoto(camera))
    }
)