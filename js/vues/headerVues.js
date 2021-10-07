// affichage du nombre des appareils photos dans le panier
export function compteurPanier(compteurProduit, infoPanier){
    infoPanier.innerHTML = `<p>${compteurProduit}</p>`
  }