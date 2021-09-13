import {afficherDesCameras} from "../vues/indexvues.js"
import {getDesCameras} from "../api/api.js"

getDesCameras().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("appareils").appendChild(afficherDesCameras(camera));
    });
})