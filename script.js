let produits=[
    {
        "nom": "Éclair au Chocolat",
        "description": "Laissez-vous tenter par notre éclair au chocolat, une délicieuse pâtisserie faite maison. Une coque croquante et une crème onctueuse pour une explosion de saveurs.",
      "images":"https://cdn.glitch.global/34823477-3d93-4a38-aaf6-ceb2b1fd2fa9/eclair-chocolat.webp?v=1714150243039"
    },
    {
        "nom": "Macarons Variés",
        "description": "Découvrez nos macarons aux saveurs variées, préparés avec soin pour satisfaire toutes les papilles. Des couleurs vives et des combinaisons de goûts uniques.",
      "images":"https://cdn.glitch.global/34823477-3d93-4a38-aaf6-ceb2b1fd2fa9/macarons.jpeg?v=1714150244817"
    },
    {
        "nom": "Tarte aux Fruits Frais",
        "description": "Savourez notre tarte aux fruits frais, une création légère et fruitée. Des fruits de saison disposés avec art sur une délicieuse pâte sablée.",
      "images":"https://cdn.glitch.global/34823477-3d93-4a38-aaf6-ceb2b1fd2fa9/Tarte-aux-fruits.jpg?v=1714150246783"
    },
    {
        "nom": "Millefeuille Vanille-Framboise",
        "description": "Plongez dans la gourmandise avec notre millefeuille à la vanille et à la framboise. Des couches croustillantes et crémeuses pour une expérience gustative exquise.",
      "images":"https://cdn.glitch.global/34823477-3d93-4a38-aaf6-ceb2b1fd2fa9/millefeuille-framboise.jpg?v=1714150245763"
    },
    {
        "nom": "Chausson aux Pommes",
        "description": "Retrouvez le plaisir réconfortant de notre chausson aux pommes. Une pâte feuilletée croustillante et une garniture généreuse aux pommes fondantes.",
      "images":"https://cdn.glitch.global/34823477-3d93-4a38-aaf6-ceb2b1fd2fa9/chausson-pomme.webp?v=1714150241823"
    }

]
produits.forEach(element =>{

    document.querySelector("#content").innerHTML +=
    `
    <section class="card">

             <img class="produits"src="${element.images}" alt="">
             <p>${element.nom } </p>
             <p>${element.description }</p>
             

     
     `
   } )