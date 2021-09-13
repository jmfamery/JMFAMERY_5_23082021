export function afficherUneCamera(camera) {
    let produit = `<div class="card border border-2 border-dark rounded-3">
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
                      <option value="objectif-1">${camera.lenses[0]}</option>
                      <option value="objectif-2">${camera.lenses[1]}</option>
                      <option value="objectif-3">${camera.lenses[2]}</option>
                    </select>
                  </div>
  
                  <div class="input-group px-3 mb-3">
                    <label for="quantite" class="input-group-text text-white bg-dark">Quantité</label>
                    <input type="number" class="form-control text-center" id="quantite" value="1">
                  </div>
  
                  <p class="mb-3 text-center">${camera.priceDev}</p>
                
                  <div class="text-center px-3 mb-3">
                    <a class="btn btn-dark" href="#">Ajouter au panier</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div class="card-footer border-top-0 mt-3">
            <div class="row">
              <div class="col-xl-8 col-lg-7 col-md-12 text-center mb-3">
                <a class="btn btn-dark" href="../index.html#produits">Retour aux produits</a>
              </div>
              <div class="col-xl-4 col-lg-5 col-md-12 text-center mb-3">
                <a class="btn btn-dark" href="panier.html">Consulter le panier</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  
    let div = document.createElement('div');
    div.innerHTML = produit;
    return div;
  }