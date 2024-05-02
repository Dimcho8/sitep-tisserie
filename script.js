
fetch("patisseries.json")
    
    .then(rep => {
    
        return rep.json();
    })

    .then(data => {
        
      produits(data.entreprise.produits);
    });
    function produits(tableuEntreprise){
        tableuEntreprise.forEach(entreprise=> {
            documentEntreprise.querySelector("#content").innerHTML+=

            `
            <div class="card">
            <h2>${entreprise.nomCommercial} </h2>
            <img src="${entreprise.phraseAccroche}">
            <p>${entreprise.texteAppelAction}</p>
            </div>
            `
        
        })}


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
   