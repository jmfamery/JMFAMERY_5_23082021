import {afficherDesAppareilsPhoto} from "../vues/indexVues.js"
import {getAllCameras} from "../api/api.js"

// récupération des données pour l'affichage des appareils photos et son affichage
getAllCameras().then((cameras) => {
    cameras.forEach(camera => {
        document.getElementById("appareils").appendChild(afficherDesAppareilsPhoto(camera));
    });
})