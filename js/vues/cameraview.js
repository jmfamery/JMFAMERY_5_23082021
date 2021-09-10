export function afficherDesCameras(camera) {
  let template = `<div class="card border border-2 border-dark rounded-3">
    <div class="fond-clair-v2">
      <div class="card-header text-center border-bottom-0">
        <div class="police2-gras">
          <h3 class="card-tilte mb-0">${camera.name}</h3>
        </div>
      </div>

      <div class="police2-normal">
        <div class="card-body texte-start pt-0 pb-0">
          <div class="fond-clair-v3">
            <img class="card-img img-fluid" src=${camera.imageUrl} alt="produit">
            <p class="p-3 mb-0">${camera.description}</p>
          </div>
        </div> 

        <div class="card-footer px-4 border-top-0">
          <div class="row">
            <div class="col-6">
              <a class="btn btn-dark" href="html/produit.html">Consulter</a>
            </div>

            <div class="col-6">
              <p class="text-end mt-2 mb-0">${camera.priceDev}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  let div = document.createElement('div');
  div.classList.add('col-lg-4','col-md-6')
  div.innerHTML = template;
  return div;
}

export function afficherUneCamera(camera) {
  let template = `<div class="card border border-2 border-dark rounded-3">
    <div class="fond-clair-v2">
      <div class="card-header text-center border-bottom-0">
        <div class="row">
          <div class="col">
            <div class="card-tilte mb-0">
              <h3 class="police2-gras">${camera.name}</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="police2-normal">
        <div class="card-body pt-0 pb-0">
          <div class="fond-clair-v3">
            <div class="row">
              <div class="col-xxl-8 col-xl-7 col-lg-6 col-md-12">
                <img class="img-fluid" src=${camera.imageUrl} alt="produit">
              </div>
    
              <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-12">
                <p class="mx-3 my-3">${camera.description}</p>
                
                <div class="input-group px-3 mb-3">
                  <label for="objectif" class="input-group-text text-white bg-dark" >Objectif</label>
                  <select class="form-select text-center" id="lentilles">
                    <option selected>Choisir son objectif</option>
                    <option value="objectif-1">${camera.lenses}</option>
                    <option value="objectif-2">${camera.lenses}</option>
                    <option value="objectif-3">${camera.lenses}</option>
                  </select>
                </div>

                <div class="input-group px-3 mb-3">
                  <label for="quantite" class="input-group-text text-white bg-dark">Quantité</label>
                  <input type="number" class="form-control text-center" id="quantite" value="1">
                </div>

                <p class="mb-3 text-center">${camera.priceDev}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card-footer border-top-0">
          <div class="row">
            <div class="col-xl-8 col-lg-7 col-md-12">
            </div>
            <div class="col-xl-4 col-lg-5 col-md-12 text-center">
              <a class="btn btn-dark" href="panier.html">Panier</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  let div = document.createElement('div');
  div.innerHTML = template;
  return div;
}