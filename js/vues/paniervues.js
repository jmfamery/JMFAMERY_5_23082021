let Panier = JSON.parse(localStorage.getItem("panier"));
console.log(Panier)

const panierDetail = document.querySelector("#panier-detail")
const panierTotal = document.querySelector("#panier-total")

if (Panier === null || Panier == 0) {
  const panierVideDetail = `<div class="card-body text-center pb-0">
    <div class="fond-clair-v3 police2-gras">
      <div class="row g-3">
        <div class="col-12">
          <p class="fs-5">Le panier est vide</p>
        </div>
      </div>
    </div>
  </div>`

  const panierVideTotal = `<div class="card-footer text-center border-top-0 pb-0">
    <div class="row g-3 py-2">
      <div class="col-6">
        <div class="police2-normal">
          <a class="btn btn-dark" href="">Supprimer le panier</a>
        </div>
      </div>

      <div class="col-2 pt-2">
        <p class="police2-gras">Total</p>
      </div>

      <div class="col-3 pt-2">
        <p class="police2-gras"></p>
      </div>

      <div class="col-1">
      </div>
    </div>
  </div>`;

  panierDetail.innerHTML = panierVideDetail
  panierTotal.innerHTML = panierVideTotal

} else {
  let panierPleinDetail = []
  let numeroPanier = 0
  let totalPanier = 0

  for (numeroPanier = 0; numeroPanier < Panier.length; numeroPanier++) {
    panierPleinDetail = panierPleinDetail + `<div class="card-body text-center pb-0">
      <div class="fond-clair-v3 police2-normal">
        <div class="row g-3">
          <div class="col-3">
            <p>${Panier[numeroPanier].name}</p>
          </div>

          <div class="col-3">
            <p>${Panier[numeroPanier].lenses}</p>
          </div>

          <div class="col-2">
            <p>${Panier[numeroPanier].number}</p>
          </div>

          <div class="col-3">
            <p>${Intl.NumberFormat('fr-FR', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 0
            }).format(Panier[numeroPanier].price * Panier[numeroPanier].number / 100)}</p>
          </div>

          <div class="col-1">
            <button class="btn suppression-individuel">
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
  }

  if (numeroPanier == Panier.length) {
    panierDetail.innerHTML = panierPleinDetail
  }

  for (numeroPanier = 0; numeroPanier < Panier.length; numeroPanier++) {
    totalPanier = totalPanier + (Panier[numeroPanier].price * Panier[numeroPanier].number) / 100;
  }

  const panierPleinTotal = `<div class="card-footer text-center border-top-0 pb-0">
    <div class="row g-3 py-2">
      <div class="col-6">
        <div class="police2-normal">
          <a class="btn btn-dark" href="">Supprimer le panier</a>
        </div>
      </div>

      <div class="col-2 pt-2">
        <p class="police2-gras">Total</p>
      </div>

      <div class="col-3 pt-2">
        <p class="police2-gras">${Intl.NumberFormat('fr-FR', {
          style: 'currency',
          currency: 'EUR',
          minimumFractionDigits: 0
        }).format(totalPanier)}</p>
      </div>

      <div class="col-1">
      </div>
    </div>
  </div>`;

  if (numeroPanier == Panier.length) {
    panierTotal.innerHTML = panierPleinTotal
  }
}

let suppressionIndividuel = document.querySelectorAll(".suppression-individuel")
console.log(suppressionIndividuel)

for (let suppression = 0; suppression < suppressionIndividuel.length; suppression++) {
  suppressionIndividuel[suppression].addEventListener('click', () => {
    let idSuppression = Panier[suppression]._id;
    console.log(idSuppression)

    Panier = Panier.filter(appareil => appareil._id !== idSuppression)
    localStorage.setItem("panier", JSON.stringify(Panier));
    alert("L'appareil a été supprimer")
    window.location.href = "Panier.html"

    console.log(Panier)
  })
}