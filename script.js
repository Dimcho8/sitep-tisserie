// je recupere le header dans le document 
let header = document.querySelector("header")
// je recupere aussi la baniere :
let ban = document.querySelector(".acc")

// j'ecoute le scroll : 
window.addEventListener("scroll", () => {
    console.log("j'ai scrollé")
    if (window.scrollY > ban.clientHeight - 100) {
        header.classList.add("headerColored")
    } else {
        header.classList.remove("headerColored")
    }

})



fetch("patisseries.json")

    .then(rep => {

        return rep.json();
    })

    .then(data => {

        clients(data.entreprise.avantagesClients);
        produits(data.entreprise.produits);
        services(data.entreprise.services);
        temoignages(data.entreprise.temoignages);
    });


function produits(tableauProduits) {
    tableauProduits.forEach(produits => {
        document.querySelector("#content").innerHTML +=

            `
            <div data-aos="zoom-out-down"class="card ">
            <h2>${produits.nom} </h2>
            <img src="${produits.images}">
            <p>${produits.description}</p>
            <a class="btn2" href="#"></i><span>Ajouté à la liste d'articles</span><p>${produits.prix}</p>
             </a>
            
            </div>
            `
    })
}

function services(tableauServices) {
    tableauServices.forEach(services => {
        document.querySelector("#serv").innerHTML +=

            `
            <div data-aos="flip-left" class="serv1">
            <img src="${services.images}">
            <div class="info">
            <h2>${services.nom} </h2>
            <p>${services.description} </p>
            <a href="#" class="btn3">En savoir plus</a>

            
            </div>


            </div>
            `
    })
}
function temoignages(tableauTemoignages) {
    tableauTemoignages.forEach(temoignages => {
        document.querySelector("#container").innerHTML +=

            `
            <div data-aos="zoom-in"  class="card1" >
            <div  class="imgBx">
            <img src="${temoignages.images}">
         
            </div>
            <div class="content">
            <h2>${temoignages.prenom} </h2>

            <p>${temoignages.typeExperience} </p>
            <p>${temoignages.commentaire}</p>
            <a href="#">${temoignages.note}</a>
         
             </div>
            
            </div>
            `
    })
}
function clients(tableauAvantagesClients) {
    tableauAvantagesClients.forEach(avantagesClients => {
        document.querySelector("#acc").innerHTML +=

            `
            <div  data-aos="flip-left" class=cli>
            
            <p>${avantagesClients}</p>
            <a href="#">En savoir plus</a>
        </div>
    
            
            `

    })
}

AOS.init();

