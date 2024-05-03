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
            <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"class="card ">
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
            <div class="serv1">
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

function clients(tableauAvantagesClients) {
    tableauAvantagesClients.forEach(avantagesClients => {
        document.querySelector("#acc").innerHTML +=

            `
            <div  data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0" class=cli>
            <h2>${avantagesClients}</h2>
        </div>
    
            
            `

    })
}
function temoignages(tableauTemoignages) {
    tableauTemoignages.forEach(temoignages => {
        document.querySelector("#tem").innerHTML +=

            `
            <p data-aos="fade-up-left"class="temm">
            <span>${temoignages.prenom} </spab>
            <span>${temoignages.typeExperience} </span>
            <span>${temoignages.commentaire}</span>
            <span>${temoignages.note}</span>
            </p>
            `
    })
}
AOS.init();

