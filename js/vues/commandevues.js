export function afficherCommande(commande, commandeDetail, commandeTotal) {
  if (commande.estVide()) {
    commandeDetail.innerHTML = afficherCommandeVideDetail()
    commandeTotal.innerHTML = afficherCommandeTotal(commande)
  } else {
    commandeDetail.innerHTML = afficherCommandePleinDetail(commande)
    commandeTotal.innerHTML = afficherCommandeTotal(commande)
  }
}

function afficherCommandeVideDetail () {
  return `<div class="card-body text-center pb-0">
    <div class="fond-clair-v3 police2-gras">
      <div class="row g-3">
        <div class="col-12">
          <p class="fs-5">Pas de commande précédante</p>
        </div>
      </div>
    </div>
  </div>`
}

function afficherCommandePleinDetail(commande) {
  let commandePleinDetail = "";

  commande.donnees.forEach(appareil => {
    commandePleinDetail += `<div class="card-body text-center pb-0">
        <div class="fond-clair-v3 police2-normal">
          <div class="row g-3">
            <div class="col-4">
              <p>${appareil.name}</p>
            </div>

            <div class="col-3">
              <p>${appareil.lenses}</p>
            </div>

            <div class="col-2">
              <p>${appareil.number}</p>
            </div>

            <div class="col-3">
              <p>${Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 0
                }).format(appareil.price * appareil.number / 100)}
              </p>
            </div>
          </div>
        </div>
      </div>`
    })
  return commandePleinDetail;
}

function afficherCommandeTotal(commande) {
  return `<div class="card-footer text-center border-top-0 pb-0">
    <div class="police2-gras">
      <div class="row g-3">
        <div class="col-7">
        </div>

        <div class="col-2">
          <p>Total</p>
        </div>

        <div class="col-3">
          <p>${Intl.NumberFormat('fr-FR', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 0
            }).format(commande.montantTotal() / 100)}</p>
          </p>
        </div>
      </div>
    </div>
  </div>`;
}