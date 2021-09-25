function selectionObjectif(camera) {
  let objectifElt = document.createElement('select');
  objectifElt.classList.add('form-select', 'text-center');

  let defaultOptionElt = document.createElement('option');
  defaultOptionElt.innerText = "Choisir son objectif";
  objectifElt.appendChild(defaultOptionElt)

  let numeroValue = -1
  camera.lenses.forEach((lense) => {
    let optionElt = document.createElement('option');
    numeroValue++;
    optionElt.innerText = lense;
    optionElt.value = numeroValue;
    objectifElt.appendChild(optionElt)
  })
  return objectifElt;
}

export function afficherUnAppareilPhoto(camera, panier) {
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
                    <label for="objectif" class="input-group-text form-label text-white bg-dark" >Objectif</label>
                    <div id ="produit-selection-objectif">
                    </div>                                      
                  </div>
  
                  <div class="input-group px-3 mb-3">
                    <label for="quantite" class="input-group-text text-white bg-dark">Quantité</label>
                    <input type="number" class="form-control text-center" id="quantite" value="1">
                  </div>
  
                  <p class="mb-3 text-center">
                    ${Intl.NumberFormat('fr-FR', {
                      style: 'currency',
                      currency: 'EUR',
                      minimumFractionDigits: 0
                    }).format(camera.price/100)}
                  </p>
                
                  <div class="text-center px-3 mb-3">
                    <button class="btn btn-dark" id="ajouter-au-panier-btn">Ajouter au panier</button>
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

  let afficherElt = document.createElement('div');
  afficherElt.innerHTML = produit;

  let selectElt = selectionObjectif(camera);
  afficherElt.querySelector('#produit-selection-objectif').appendChild(selectElt);
  
  let ajouterAupanierBtn = afficherElt.querySelector('#ajouter-au-panier-btn');
  ajouterAupanierBtn.addEventListener('click', () => {
    if (selectElt.value >= 0) {
      let quantites = document.getElementById("quantite").value;

      let appareil = {
        _id: camera._id,
        name: camera.name,
        lenses: camera.lenses[selectElt.value],
        lenses_id: selectElt.value,
        price: camera.price,
        number: parseInt(quantites)
      }
      console.log(appareil);

      panier.ajouterUnProduit(appareil);

      let totalPrice = Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0
      }).format(camera.price * quantites / 100);

      if (quantites == 1) {
        alert(`L'appareil photo ${appareil.name}, objectif ${appareil.lenses} pour un montant de ${totalPrice} a bien été ajouté au panier.`);
      }else {
        alert(`Les ${quantites} appareils photo ${appareil.name}, objectif ${appareil.lenses} pour un montant de ${totalPrice} ont bien été ajoutés au panier.`);
      }
    } else {
      alert("Veuillez selectionner l'objectif")
    }
  })

  return afficherElt;
}