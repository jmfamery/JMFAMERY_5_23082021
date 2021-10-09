export function afficherPanier(panier, panierDetail, panierTotal) {
  if (panier.estVide()) {
    panierDetail.innerHTML = afficherPanierVideDetail()
    panierTotal.innerHTML = afficherPanierTotal(panier)
  } else {
    panierDetail.innerHTML = afficherPanierPleinDetail(panier)
    panierTotal.innerHTML = afficherPanierTotal(panier)
    clicsSupprimerUnAppareil(panier)
    clicsSupprimerTousAppareils(panier)
  }
}

// affichage que le panier est vide
function afficherPanierVideDetail() {
  return `<div class="card-body text-center pb-0">
    <div class="fond-clair-v3 police2-gras">
      <div class="row g-3">
        <div class="col-12">
          <p class="fs-5">Le panier est vide</p>
        </div>
      </div>
    </div>
  </div>`
}

// affichage de la liste des appareils photos dans le panier
function afficherPanierPleinDetail(panier) {
  let panierPleinDetail = "";

  panier.donnees.forEach(appareil => {
    panierPleinDetail += `<div class="card-body text-center pb-0">
        <div class="fond-clair-v3 police2-normal">
          <div class="row g-3">
            <div class="col-3">
              <p>${appareil.name}</p>
            </div>

            <div class="col-2">
              <p>${appareil.lenses}</p>
            </div>

            <div class="col-2">
              <p>${Intl.NumberFormat('fr-FR', {
                style: 'currency',
                currency: 'EUR',
                minimumFractionDigits: 0
              }).format(appareil.price / 100)}
            </div>

            <div class="col-2">
              <p>${appareil.number}</p>
            </div>

            <div class="col-2">
              <p>${Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 0
                }).format(appareil.price * appareil.number / 100)}
              </p>
            </div>

            <div class="col-1">
              <button class="btn poubelleappareil" type="button" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-trash-fill" viewBox="0 0 16 16">
                <path
                  d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>`;
  });

  return panierPleinDetail;
}

// affichage du total du panier d'appareils photos
function afficherPanierTotal(panier) {
  return `<div class="card-footer text-center border-top-0 fs-5 pb-0">
    <div class="row g-3 py-2">
      <div class="col-7">
        <div class="police2-normal">
          <button id="viderpanier" class="btn btn-dark">Supprimer le panier</button>
        </div>
      </div>

      <div class="col-2 pt-2">
        <p class="police2-gras">Total</p>
      </div>

      <div class="col-2 pt-2">
        <p class="police2-gras">${Intl.NumberFormat('fr-FR', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 0
        }).format(panier.montantTotal() / 100)}</p>
      </div>

      <div class="col-1">
      </div>
    </div>
  </div>`;
}

// suppression d'un appareil photo dans le panier
function clicsSupprimerUnAppareil(panier) {
  let poubelleAppareil = document.querySelectorAll(".poubelleappareil")

  for (let suppression = 0; suppression < poubelleAppareil.length; suppression++) {
    poubelleAppareil[suppression].addEventListener('click', () => {
      let idPoubelleAppareil = panier.donnees[suppression]._id + panier.donnees[suppression].lenses_id;
      panier.supprimerUnProduit(idPoubelleAppareil)
      alert("L'appareil photo a été supprimé")
      window.location.href = "panier.html"
    })
  }
}

// suppression de tous les appareils photos dans le panier
function clicsSupprimerTousAppareils(panier) {
  let viderPanier = document.querySelector("#viderpanier")

  viderPanier.addEventListener('click', () => {
    panier.supprimerTousProduits();
    alert("Le panier a été vidé");
    window.location.href = "panier.html"
  })
}