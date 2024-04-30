
fetch("patisseries.json")
    
    .then(rep => {
    
        return rep.json();
    })

    .then(data => {
        
      produits(data.entreprise.produits);
    });


function produits(tableauProduits) {
    tableauProduits.forEach(produits => {
        document.querySelector("#content").innerHTML+=
        
        `
        <div class="card">
        <h2>${produits.nom} </h2>
        <img src="${produits.images}">
        <p>${produits.description}</p>
        </div>
        `
    })}
   