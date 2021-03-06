// affichage des appareils photos
export function afficherDesAppareilsPhoto(camera) {
  let index = `<div class="card border border-2 border-dark rounded-3">
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
              <a class="btn btn-dark" href="html/produit.html?id=${camera._id}">Consulter</a>
            </div>

            <div class="col-6">
              <p class="text-end mt-2 mb-0">
                ${Intl.NumberFormat('fr-FR', {
                  style: 'currency',
                  currency: 'EUR',
                  minimumFractionDigits: 0
                }).format(camera.price / 100)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  let afficherElt = document.createElement('div');
  afficherElt.classList.add('col-lg-4', 'col-md-6');
  afficherElt.innerHTML = index;
  return afficherElt;
}