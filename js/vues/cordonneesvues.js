export function afficherCordonnees(cordonnees, formulaire) {
  // if (cordonnees.estPlein()) {
  //   affichageDonneesFormulaire(cordonnees)
  // }
  if (cordonnees.estVide()) {
    initialiserFormulaire()
  } else {
    chargerFormulaire(cordonnees)
  }
  formulaire.innerHTML = afficherFormulaire(cordonnees)
  saisieFormulaire(cordonnees)
  viderFormulaire(cordonnees)
}

function initialiserFormulaire() {
  let donneesFormulaire = {
    prenom : "",
    nom : "",
    mail : "",
    adresse : "",
    code_postal : "",
    ville : ""
  }
  console.log("vide", donneesFormulaire)
  return(donneesFormulaire)
}

function chargerFormulaire(cordonnees) {
  let donneesFormulaire = cordonnees.donnees[0]
  console.log("plein : ", donneesFormulaire);
  return(donneesFormulaire)
}

function afficherFormulaire(donneesFormulaire) {
  return `<div class="card-body pb-0">
    <div class="fond-clair-v3">
      <div class="row g-3 px-3 pb-4">
        <div class="col-md-4">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" class="form-control" id="prenom" value="${donneesFormulaire.prenom}" required>
        </div>

        <div class="col-md-4">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" class="form-control" id="nom" value="${donneesFormulaire.nom}" required>
        </div>

        <div class="col-md-4">
          <label for="mail" class="form-label">Adresse mail</label>
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" id="mail" aria-describedby="mail" value="${donneesFormulaire.mail}" required>
          </div>
        </div>

        <div class="col-md-6">
          <label for="adresse" class="form-label">Adresse</label>
          <input type="text" class="form-control" id="adresse" value="${donneesFormulaire.adresse}" required>
        </div>

        <div class="col-md-2">
          <label for="code-postal" class="form-label">Code postal</label>
          <input type="number" class="form-control" id="code-postal" value="${donneesFormulaire.code_postal}" required>
        </div>

        <div class="col-md-4">
          <label for="ville" class="form-label">Ville</label>
          <input type="text" class="form-control" id="ville" value="${donneesFormulaire.ville}" required>
        </div>

      </div>
    </div>
  </div>

  <div class="card-footer text-center border-top-0 pb-0 my-3">
    <button id="commande" class="btn btn-dark" type="submit">Commander</button>
    <button id="vider" class="btn btn-dark" type="submit">Vider les cordonnees</button>
  </div>`
}

// function affichageDonneesFormulaire (cordonnees) {
//   console.log("Affichage données formulaire : ", cordonnees.donnees[0])

//   document.querySelectorAll("#prenom").value = cordonnees.donnees[0].prenom;

//   let cordonnees_Prenom = cordonnees.donnees[0].prenom;
//   console.log("Prenom : ", cordonnees_Prenom)
//   document.querySelectorAll("#prenom").value = cordonnees_Prenom;

// function remplirInput (input) {
//   document.querySelectorAll(`#${input}`).value = cordonnees.donnees[input];
// }
// remplirInput ("prenom")

// document.querySelectorAll("#prenom").value = cordonnees.donnees[0].prenom;
// document.querySelectorAll("#nom").value = cordonnees.donnees[0].nom;
// document.querySelectorAll("#mail").value = cordonnees.donnees[0].mail;
// document.querySelectorAll("#adresse").value = cordonnees.donnees[0].adresse;
// document.querySelectorAll("#code-postal").value = cordonnees.donnees[0].code_postal;
// document.querySelectorAll("#ville").value = cordonnees.donnees[0].ville;
// }

function saisieFormulaire(cordonnees) {
  let formulaireBtn = document.querySelector("#commande")

  formulaireBtn.addEventListener('click', () => {
    let enregistrerFormulaire = {
      prenom: document.getElementById("prenom").value,
      nom: document.getElementById("nom").value,
      mail: document.getElementById("mail").value,
      adresse: document.getElementById("adresse").value,
      code_postal: document.getElementById("code-postal").value,
      ville: document.getElementById("ville").value
    }
    cordonnees.enregistrerCordonnees(enregistrerFormulaire);
    console.log("Enregistrement du formulaire : ", enregistrerFormulaire)
  })
}

function viderFormulaire(cordonnees) {
  let formuliareViderBtn = document.querySelector("#vider")

  formuliareViderBtn.addEventListener('click', () => {
    cordonnees.supprimerCordonnees()
  })
}