export function panierDetail(camera) {
  let panierdetail = `<div class="card-body text-center pb-0">
    <div class="fond-clair-v3 police2-normal">
      <div class="row g-3">
        <div class="col-3">
          <p>${camera.name}</p>
        </div>

        <div class="col-3">
          <p>${camera.lenses[0]}</p>
        </div>

        <div class="col-2">
          <p>1</p>
        </div>

        <div class="col-3">
          <p>${camera.priceDev}</p>
        </div>

        <div class="col-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </div>
      </div>
    </div>
  </div>`;

  let div = document.createElement('div');
  div.innerHTML = panierdetail;
  return div;
}

export function panierTotal(camera) {
  let paniertotal = `<div class="card-footer text-center border-top-0 pb-0">
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
        <p class="police2-gras">${camera.totalprice}</p>
      </div>

      <div class="col-1">
      </div>
    </div>
  </div>`;

  let div = document.createElement('div');
  div.innerHTML = paniertotal;
  return div;
}