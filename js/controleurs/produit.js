import {afficherUneCamera} from "../vues/cameraview.js"
import {getUneCamera} from "../api/api.js"

getUneCamera().then((camera) => {
    document.getElementById("appareil").appendChild(afficherUneCamera(camera))
    }
)