export function afficherCordonnees(cordonnees, formulaire) {
  formulaire.innerHTML = afficherFormulaire()
  saisieFormulaire(cordonnees)
  viderFormulaire(cordonnees)
}

function afficherFormulaire() {
  return `<div class="card-body pb-0">
    <div class="fond-clair-v3">
      <div class="row g-3 px-3 pb-4">
        <div class="col-md-4">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" class="form-control" id="prenom" value="Toto" required>
        </div>

        <div class="col-md-4">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" class="form-control" id="nom" value="Toto" required>
        </div>

        <div class="col-md-4">
          <label for="mail" class="form-label">Adresse mail</label>
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input type="text" class="form-control" id="mail" value="Toto@toto.fr" aria-describedby="mail" required>
          </div>
        </div>

        <div class="col-md-6">
          <label for="adresse" class="form-label">Adresse</label>
          <input type="text" class="form-control" id="adresse" value="Toto" required>
        </div>

        <div class="col-md-2">
          <label for="code-postal" class="form-label">Code postal</label>
          <input type="number" class="form-control" id="code-postal" value="75" required>
        </div>

        <div class="col-md-4">
          <label for="ville" class="form-label">Ville</label>
          <input type="text" class="form-control" id="ville" value="Toto" required>
        </div>

      </div>
    </div>
  </div>

  <div class="card-footer text-center border-top-0 pb-0 my-3">
    <button id="commande" class="btn btn-dark" type="submit">Commander</button>
    <button id="vider" class="btn btn-dark" type="submit">Vider cordonnees</button>
  </div>`
}

function saisieFormulaire (cordonnees) {
  let formulaireBtn = document.querySelector("#commande")

  formulaireBtn.addEventListener('click', () => {
    let formulaire = {
      prenom : document.getElementById("prenom").value,
      nom : document.getElementById("nom").value,
      mail : document.getElementById("mail").value,
      adresse : document.getElementById("adresse").value,
      code_postal : document.getElementById("code-postal").value,
      ville : document.getElementById("ville").value
    }
    cordonnees.enregistrer(formulaire);
    console.log("Formulaire : ",formulaire)
  })
}

function viderFormulaire (cordonnees) {
  let formuliareViderBtn = document.querySelector("#vider")

  formuliareViderBtn.addEventListener('click', () => {
    cordonnees.supprimer()
  })
}