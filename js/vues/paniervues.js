let panier = JSON.parse(localStorage.getItem("panier"));
console.log(panier)

const panierDetail = document.querySelector("#panier-detail")
const panierTotal = document.querySelector("#panier-total")

if (panier === null || panier == 0) {
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
  let numeropanier = 0
  let totalpanier = 0

  for (numeropanier = 0; numeropanier < panier.length; numeropanier++) {
    panierPleinDetail = panierPleinDetail + `<div class="card-body text-center pb-0">
      <div class="fond-clair-v3 police2-normal">
        <div class="row g-3">
          <div class="col-3">
            <p>${panier[numeropanier].name}</p>
          </div>

          <div class="col-3">
            <p>${panier[numeropanier].lenses}</p>
          </div>

          <div class="col-2">
            <p>${panier[numeropanier].number}</p>
          </div>

          <div class="col-3">
            <p>${Intl.NumberFormat('fr-FR', {
              style: 'currency',
              currency: 'EUR',
              minimumFractionDigits: 0
            }).format(panier[numeropanier].price * panier[numeropanier].number / 100)}</p>
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

  if (numeropanier == panier.length) {
    panierDetail.innerHTML = panierPleinDetail
  }

  for (numeropanier = 0; numeropanier < panier.length; numeropanier++) {
    totalpanier = totalpanier + (panier[numeropanier].price * panier[numeropanier].number);
  }

  const panierPleinTotal = `<div class="card-footer text-center border-top-0 pb-0">
    <div class="row g-3 py-2">
      <div class="col-6">
        <div class="police2-normal">
          <button class="btn btn-dark suppression-total">Supprimer le panier</button>
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
        }).format(totalpanier / 100)}</p>
      </div>

      <div class="col-1">
      </div>
    </div>
  </div>`;

  if (numeropanier == panier.length) {
    panierTotal.innerHTML = panierPleinTotal
  }
}

let suppressionIndividuel = document.querySelectorAll(".suppression-individuel")
console.log(suppressionIndividuel)

for (let suppression = 0; suppression < suppressionIndividuel.length; suppression++) {
  suppressionIndividuel[suppression].addEventListener('click', () => {
    let idSuppression = panier[suppression]._id;
    console.log(idSuppression)

    panier = panier.filter(appareil => appareil._id !== idSuppression)
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("L'appareil a été supprimer")
    window.location.href = "panier.html"

    console.log(panier)
  })
}

let suppressionTotal = document.querySelector(".suppression-total")
console.log(suppressionTotal)

if (suppressionTotal !== null) {
  suppressionTotal.addEventListener('click', () => {
    localStorage.removeItem("panier");
    alert("Le panier a été vidé")
    window.location.href = "panier.html"
  })
}
