const listaFotos = [
    {
        id: 0,
        url: 'macaco-japones-smartphone-2771257',
        extension: 'webp',
        description: 'Mono haciendo doomscrolling'
    },
    {
        id: 1,
        url: 'pexels-aleksey-kuprikov-1883853-3493731',
        extension: 'jpg',
        description: 'Mono madre con mono hijo'
    },
    {
        id: 2,
        url: 'pexels-andre-mouton-1207875',
        extension: 'jpg',
        description: 'Mono reflexionando sobre la vida'
    },
    {
        id: 3,
        url: 'pexels-arindam-2213575',
        extension: 'jpg',
        description: 'Mono gritando'
    },
    {
        id: 4,
        url: 'pexels-iurii-laimin-78973777-14431127',
        extension: 'jpg',
        description: 'Monos besandose'
    },
    {
        id: 5,
        url: 'pexels-james-boss-1456964-13187517',
        extension: 'jpg',
        description: 'Mono sobre mis muertos'
    },
    {
        id: 6,
        url: 'pexels-rachel-claire-5865560',
        extension: 'jpg',
        description: 'Mono oculto'
    },
    {
        id: 7,
        url: 'pexels-t6adventures-14598417',
        extension: 'jpg',
        description: 'Mono rezando a la virgen maria'
    },
    {
        id: 8,
        url: 'pexels-yankrukov-5479895',
        extension: 'jpg',
        description: 'Mono de chill'
    },
]

async function renderImg() {
    
    const contenedorFotos = document.querySelector('.contenedorFotos');
    listaFotos.forEach((foto) => {
        contenedorFotos.innerHTML += `
            <picture
                class="foto gallery-item m-3"
                data-lazy=""
                data-download-area-keyframe='{"start": "a0t - 200vh", "end": "a0b + 100vh", "anchors": [".accordion"]}'
                data-picture-loaded=""
                >
                <source
                    srcset="
                    output-adv/${foto.url}-small-1x.${foto.extension},
                    output-adv/${foto.url}-small-2x.${foto.extension} 2x
                    "
                    media="(max-width:2040px)"
                />
                <source
                    srcset="
                    output-adv/${foto.url}-medium-1x.${foto.extension},
                    output-adv/${foto.url}-medium-2x.${foto.extension} 2x
                    "
                    media="(max-width:11280px)"
                />
                <source
                    srcset="
                    output-adv/${foto.url}-large-1x.${foto.extension},
                    output-adv/${foto.url}-large-2x.${foto.extension} 2x
                    "
                    media="(max-width:11920px)"
                />
                <source
                    srcset="
                    output-adv/${foto.url}-xlarge-1x.${foto.extension},
                    output-adv/${foto.url}-xlarge-2x.${foto.extension} 2x
                    "
                    media="(min-width:0px)"
                />
                <img
                    src="output-adv/${foto.url}-small-1x.${foto.extension}"
                    alt="${foto.description}"
                    class="shadow"
                />
            </picture>
        `;  
    });
}

try {
    await renderImg();
    document.addEventListener('DOMContentLoaded', async () => {
        const grid = document.querySelector('.d-flex');
        new Masonry(grid, {
            itemSelector: '.gallery-item',
            percentPosition: true,
        });
        
        console.log(error);
    });
} catch (error) {
    console.log(error);
}

