const listaFotos = [
    {
        id: 0,
        url: 'pexels-aleksey-kuprikov-1883853-3493731',
        extension: 'jpg',
        description: 'Mono madre con mono hijo',
        style: 'portrait'
    },
    {
        id: 1,
        url: 'macaco-japones-smartphone-2771257',
        extension: 'webp',
        description: 'Mono haciendo doomscrolling',
        style: 'landscape'
    },
    {
        id: 2,
        url: 'pexels-iurii-laimin-78973777-14431127',
        extension: 'jpg',
        description: 'Monos besandose',
        style: 'portrait'
    },
    {
        id: 3,
        url: 'pexels-rachel-claire-5865560',
        extension: 'jpg',
        description: 'Mono oculto',
        style: 'portrait'
    },
    {
        id: 4,
        url: 'pexels-arindam-2213575',
        extension: 'jpg',
        description: 'Mono gritando',
        style: 'portrait'
    },
    {
        id: 5,
        url: 'pexels-andre-mouton-1207875',
        extension: 'jpg',
        description: 'Mono reflexionando sobre la vida',
        style: 'landscape'
    },
    {
        id: 6,
        url: 'pexels-james-boss-1456964-13187517',
        extension: 'jpg',
        description: 'Mono sobre una tumba',
        style: 'landscape'
    },
    {
        id: 7,
        url: 'pexels-yankrukov-5479895',
        extension: 'jpg',
        description: 'Mono de chill',
        style: 'portrait'
    },
    {
        id: 8,
        url: 'pexels-t6adventures-14598417',
        extension: 'jpg',
        description: 'Mono rezando a la virgen maria',
        style: 'landscape'
    },
]

async function renderImg() {
    let contenedorFotos = document.querySelector('.contenedorFotos');
    let fotoStyle = "";
    let index = 0;
    listaFotos.forEach((foto) => {
        
        if (foto.style === 'portrait') {
            fotoStyle = "fotoPortrait";
        } else {
            fotoStyle = "fotoLandscape";
        }

        contenedorFotos.innerHTML += `  
            <a href='output-adv/${foto.url}-xlarge-1x.${foto.extension}' target='_blank'
            class="foto item-${index} m-3 fotoPortrait ${fotoStyle}">

            <picture
                >
                <source
                    srcset="
                    output-adv/${foto.url}-small-1x.${foto.extension},
                    output-adv/${foto.url}-small-2x.${foto.extension} 2x
                    "
                    media="(max-width:1500px)"
                />
                <source
                    srcset="
                    output-adv/${foto.url}-medium-1x.${foto.extension},
                    output-adv/${foto.url}-medium-2x.${foto.extension} 2x
                    "
                    media="(max-width:3500px)"
                />
                <source
                    srcset="
                    output-adv/${foto.url}-large-1x.${foto.extension},
                    output-adv/${foto.url}-large-2x.${foto.extension} 2x
                    "
                    media="(max-width:5500px)"
                />
                <source
                    srcset="
                    output-adv/${foto.url}-xlarge-1x.${foto.extension},
                    output-adv/${foto.url}-xlarge-2x.${foto.extension} 2x
                    "
                    media="(max-width:86500px)"
                />
                <img
                    src="output-adv/${foto.url}-small-1x.${foto.extension}"
                    alt="${foto.description}"
                    class="shadow"
                />
                <figcaption>${foto.description}</figcaption>
            </picture></a>
        `;


        index++;  
    });
}

renderImg();

