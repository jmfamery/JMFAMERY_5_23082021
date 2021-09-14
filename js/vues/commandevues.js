export function commandeDetail(camera) {
  let commandedetail = `<div class="card-body text-center pb-0">
    <div class="fond-clair-v3 police2-normal">
      <div class="row g-3">
        <div class="col-4">
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
      </div>
    </div>
  </div>`;

  let div = document.createElement('div');
  div.innerHTML = commandedetail;
  return div;
}

export function commandeTotal(camera) {
  let commandetotal = `<div class="card-footer text-center border-top-0 pb-0">
    <div class="police2-gras">
      <div class="row g-3">
        <div class="col-7">
        </div>

        <div class="col-2">
          <p>Total</p>
        </div>

        <div class="col-3">
          <p>499 €</p>
        </div>
      </div>
    </div>
  </div>`;

  let div = document.createElement('div');
  div.innerHTML = commandetotal;
  return div;
}