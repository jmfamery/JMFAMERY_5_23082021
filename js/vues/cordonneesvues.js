export function afficherCordonnees(cordonnees, formulaire, panier, commande, contact, products, ordreCommande) {
  formulaire.innerHTML = afficherFormulaire(cordonnees)
  saisieFormulaire(cordonnees, panier, commande, contact, products, ordreCommande)
  viderFormulaire(cordonnees)
}

function afficherFormulaire(cordonnees) {
  return `<div class="card-body pb-0">
    <div class="fond-clair-v3">
      <div class="row g-3 px-3 pb-4">
        <div class="col-md-4">
          <label for="prenom" class="form-label">Prénom</label>
          <input type="text" class="form-control" id="prenom" value="${cordonnees.donnees.prenom}" required>
        </div>

        <div class="col-md-4">
          <label for="nom" class="form-label">Nom</label>
          <input type="text" class="form-control" id="nom" value="${cordonnees.donnees.nom}" required>
        </div>

        <div class="col-md-4">
          <label for="mail" class="form-label">Adresse mail</label>
          <div class="input-group">
            <span class="input-group-text">@</span>
            <input type="email" class="form-control" id="mail" aria-describedby="mail" value="${cordonnees.donnees.mail}" required>
          </div>
        </div>

        <div class="col-md-6">
          <label for="adresse" class="form-label">Adresse</label>
          <input type="text" class="form-control" id="adresse" value="${cordonnees.donnees.adresse}" required>
        </div>

        <div class="col-md-2">
          <label for="code-postal" class="form-label">Code postal</label>
          <input type="number" class="form-control" id="code-postal" value="${cordonnees.donnees.code_postal}" required>
        </div>

        <div class="col-md-4">
          <label for="ville" class="form-label">Ville</label>
          <input type="text" class="form-control" id="ville" value="${cordonnees.donnees.ville}" required>
        </div>

      </div>
    </div>
  </div>

  <div class="card-footer text-center border-top-0 pb-0 my-3">
    <div class="row g-3">
      <div class="col-md-6">
        <button id="vider" class="btn btn-dark" type="submit">Effacer les cordonnees</button>
      </div>

      <div class="col-md-6">
        <button id="commande" class="btn btn-dark" type="submit">Commander</button>
      </div>
    </div>
  </div>`
}

function viderFormulaire(cordonnees) {
  let formuliareViderBtn = document.querySelector("#vider")

  formuliareViderBtn.addEventListener('click', () => {
    cordonnees.supprimer()
  })
}

function saisieFormulaire(cordonnees, panier, commande, contact, products, ordreCommande) {
  let formulaireBtn = document.querySelector("#commande")

  formulaireBtn.addEventListener('click', () => {
    cordonnees.donnees.prenom = document.getElementById("prenom").value;
    cordonnees.donnees.nom = document.getElementById("nom").value;
    cordonnees.donnees.mail = document.getElementById("mail").value;
    cordonnees.donnees.adresse = document.getElementById("adresse").value;
    cordonnees.donnees.code_postal = document.getElementById("code-postal").value;
    cordonnees.donnees.ville = document.getElementById("ville").value;

    if (panier.estVide()) {
      alert("Veuillez choisir au moins un appareil pour pouvoir commander")
    } else {
      let erreurs = cordonnees.valider();

      if (erreurs.length) {
        alert(JSON.stringify(erreurs, null, 1))
      } else {
        cordonnees.enregistrer();
        if (window.confirm("Confirmez-vous votre commande ?")) {
          commande.supprimer();
          commande.donnees = panier.donnees;
          commande.enregistrer();
          panier.supprimerTousProduits();
          contact.firstName = cordonnees.donnees.prenom;
          contact.lastName = cordonnees.donnees.nom ;
          contact.address = cordonnees.donnees.adresse;
          contact.city = cordonnees.donnees.code_postal + " " + cordonnees.donnees.ville;
          contact.email = cordonnees.donnees.mail;
          for (let numeroId = 0; numeroId < commande.donnees.length; numeroId++) {
            products[numeroId] = commande.donnees[numeroId]._id
          };
          console.log("contacts : ",contact);
          console.log("commande : ",commande)
          console.log("products : ",products);

          ordreCommande = {contact, products}
          console.log("ordre de commande : ",ordreCommande)

          alert("Votre commande est bien passer");
          window.location.href = "commande.html"
        } else {
          window.location.href = "panier.html"
        }
      }
    }
  })
}