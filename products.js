
function createProductCard(product){
    const productCard = document.createElement("div");
    //const newprice = product.price.ToFixed(2).replace('.', ',');
    productCard.className = 'gap-2';
    productCard.innerHTML = `
        <img
        src="${product.imgScr}"
        alt="${product.altText}"
        class="w-18 h-18 rounded-md hover:scale-90 duration-300"
        />
        <div class="mt-5">
            <p class="font-medium" data-cod="1">Código: ${product.code}</p>
            <p class="font-bold text-xl"> ${product.title}</p>
            <br>
            <div id="accordion-collapse" class="gap-7" data-accordion="collapse">
                <h4 id="accordion-collapse-heading-1">
                    <button type="button" class="accordion-button flex items-center justify-evenly w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>Saiba mais</span>
                        <svg class="accordion-icon w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                </h4>
                <div class="accordion-body hidden transition-0 duration-300 ease-in-out" aria-labelledby="accordion-collapse-heading-1">
                    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 white:bg-gray-900">
                        <p class="text-sm mt-2">${product.description}</p>
                    </div>
                </div>
            </div>
            <br>
            <p class="font-medium">
            País de origem: ${product.origin}
            <br>
            Tipo de aroma: ${product.aromaType}
            </p>
            <div class="flex items-center gap-2 justify-between mt-3">
                <p class="font-bold text-lg">R$ ${product.price}</p>
            </div>
            <div>
                <p class="font-bold">Até 4x de R$ ${product.termprice}</p>
                <p class="text-lg">5% OFF em Pix</p>
                <button class="bg-gray-900 px-5 rounded w-28 hover:scale-110 duration-300 hover:bg-gray-500 add-to-cart-btn" data-name="${product.title}" data-price="${product.dataprice}" data-code="${product.code}">
                    <i class="fa fa-cart-plus text-lg text-white"></i>
                </button>
            </div>
        </div>
        `;

        const accordionButton = productCard.querySelector('.accordion-button');
        const accordionBody = productCard.querySelector('.accordion-body');
        const accordionIcon = productCard.querySelector('.accordion-icon');

        accordionButton.addEventListener('click', () => {
        const isExpanded = accordionButton.getAttribute('aria-expanded') === 'true';
        accordionButton.setAttribute('aria-expanded', !isExpanded);
        accordionBody.classList.toggle('hidden');
        accordionIcon.classList.toggle('rotate-180');
        });
        
        return productCard;
}

const products = [
    {
        imgScr : './assets/Sauvage 60ml.jpeg',
        altText : 'Sauvage Dior',
        code: 1,
        title: 'Sauvage Dior Parfum - Perfume Masculino 60ml',
        description: 'As matérias-primas mais bonitas são o segredo dos melhores perfumes. É por isso que a marca Christian Dior usa ingredientes de excelente qualidade para compor suas criações olfativas. Essa qualidade faz com que suas fragrâncias permaneçam perpétuas na memória ao longo da história.',
        origin: 'França',
        aromaType: 'Fresco aromático',
        price: '879,58',
        termprice: '219,90',
        dataprice:'879.58'
    },
    {
        imgScr : './assets/Bleu de Chanel.jpeg',
        altText : 'Bleu Chanel',
        code: 2,
        title: 'Bleu de Chanel Eau de Parfum - Perfume Masculino 100ml',
        description: 'O Eau de Parfum é aplicado em uma nuvem por dentro das roupas ou na pele, em uma envolvente experiência de perfumação.',
        origin: 'França',
        aromaType: 'Amadeirado aromático',
        price: '1.156,48',
        termprice: '289,12',
        dataprice:'1156.48'
    },
    {
        imgScr : './assets/Bvgari Man.jpeg',
        altText : 'Bvlgari Man',
        code: 3,
        title: 'Bvlgari Man Glacial Essence Eau de Parfum - Perfume Masculino 100ml',
        description: "A fragrância Amara Eau de Parfum oferece o frescor perfeito para as estações quentes. Como é caracterizado por seus aromas leves, você pode usar o quanto quiser sem medo de exagerar.",
        origin: 'Itália',
        aromaType: 'Amadeirado',
        price: '770,99',
        termprice: '192,75',
        dataprice:'770.99'
    },
    {
        imgScr : './assets/Prada Paradoxe.jpeg',
        altText : 'Prada Paradoxe',
        code: 4,
        title: 'Prada Paradoxe Eau de Parfum - Perfume Feminino 90ml',
        description: "Um convite para explorar e expressar as multidimensões paradoxais das mulheres. A celebração de nunca ser a mesma, sempre você mesma. Os mestres perfumistas Nadège Le Garlantezec, Shyamala Maisondieu e Antoine Maisondieu colaboraram com Miuccia Prada e Raf Simons para conciliar atemporalidade e vanguarda, natureza e inovação.",
        origin: 'França',
        aromaType: 'Âmbar Floral',
        price: '815,51',
        termprice: '203,88',
        dataprice:'815.51'
    },
    {
        imgScr : './assets/Lacôme La Vie.jpeg',
        altText : 'Lancome La Vie',
        code: 5,
        title: 'Lancôme La Vie est Belle Eau de Parfum - Perfume Feminino 100ml',
        description: "A Vie est Belle da Lancôme é uma declaração universal da beleza da vida. Apresenta uma nova linguagem olfativa com ingredientes preciosos que a tornam uma fragrância cativante.",
        origin: 'França',
        aromaType: 'Âmbar Floral',
        price: '727,55',
        termprice: '181,89',
        dataprice:'727.55'
    },
    {
        imgScr : './assets/Versace.jpeg',
        altText : 'Versace Bright',
        code: 6,
        title: 'Versace Bright Crystal Eau de Toilette - Perfume Feminino 90ml',
        description: "A fragrância Bright Crystal eau de toilette oferece a frescura perfeita para días quentes. Por ser caracterizada por seus aromas leves, você pode usar a quantidade que quiser sem medo de exagerar.",
        origin: 'Itália',
        aromaType: 'Floral Frutado',
        price: '575,53',
        termprice: '143,88',
        dataprice:'575.53'
    },
    {
        imgScr : './assets/Her Choice.jpg',
        altText : 'Perfume Her Choice',
        code: 7,
        title: 'Perfume Her Choice For Women La Rive Eau de Parfum - Feminino 100ml',
        description: "O perfume Her Choice for woman oferece uma fragrância intensa com um alto nível de concentração. Ao contrário dos eau de toilette, é recomendado para o inverno e noites intermináveis, pois dura muitas horas na pele.",
        origin: 'Polônia',
        aromaType: 'Frutado',
        price: '206,32',
        termprice: '51,58',
        dataprice:'206.32'
    },
    {
        imgScr : './assets/Night Caviar Paris.jpg',
        altText : 'Night Caviar',
        code: 8,
        title: 'Night Caviar Paris Elysees Eau de Toilette - Perfume Masculino 100ml',
        description: "Perfume Masculino Caviar Night exala um charme irresistivel, prometendo uma experiência única. A fragrância inicia com um aroma eletrizante de Toranja, Abacaxi, Pimenta e Cominho, seguido por um coração refinado de Lavanda, Artemísia e Anisic. Encerra com uma nota intensa de Almíscar, realçada pelo Ambrostar, criando uma essência profunda e cativante.",
        origin: 'França',
        aromaType: 'Aromático',
        price: '211,75',
        termprice: '52,94',
        dataprice:'211.75'
    },
    {
        imgScr : './assets/Ou Wood Tom Ford.jpg',
        altText : 'Oud Wood Tom Ford',
        code: 9,
        title: 'Tom Ford Ombré Leather Eau de Parfum - Perfume Unisex 100ml',
        description: "Vasto e dirigido, o couro floral e as especiarias frescas de Tom Ford Ombré Leather revelam uma fragrância irrestrita, para homens e mulheres. A liberdade surge de dentro; e o coração árido do Oeste se prende no couro. Ele se move para frente, solto, através de uma linha de ar recém aberta. Como poeira no vento, pele na pele, Ombré Leather se revela como uma paisagem em camadas, onde dobras de rochas se transformam num nascer do sol dourado abaixo do horizonte.",
        origin: 'Itália',
        aromaType: 'Floral Couro',
        price: '3.040,51',
        termprice: '760,13',
        dataprice:'3040.51'
    },
    {
        imgScr : './assets/Tom Ford Black Orchid.jpg',
        altText : 'Tom Ford',
        code: 10,
        title: 'Tom Ford Black Orchid Eau de Parfum - Perfume Feminino 100ml',
        description: "Black Orchid é um rico blend de especiarias e escuridão que te envolvem, para estarem perto - cada vez mais - de vocês. Sinta o poder perfeito - ao mesmo tempo raro e extraordinário.",
        origin: 'Suíça',
        aromaType: 'Chipre Madeirado',
        price: '1.552,83',
        termprice: '388,21',
        dataprice:'1552.83',
    },
    {
        imgScr : './assets/Perfume Xerjoff Erba.jpg',
        altText : 'Xerjoff Erba',
        code: 11,
        title: 'Perfume Xerjoff Erba Pura Eau de Parfum - Perfume Unisex 100ml',
        description: "Erba Pura de Xerjoff é um perfume Âmbar Compartilhável. Erba Pura foi lançado em 2019. Erba Pura foi criado por Christian Carbonnel e Laura Santander. As notas de topo são Laranja Siciliana, Bergamota da Calábria e Limão Siciliano a nota de coração é Frutas as notas de fundo são Almíscar Branco, Baunilha de Madagascar e Âmbar",
        origin: 'Itália',
        aromaType: 'Frutado',
        price: '2.931,00',
        termprice: '732,91',
        dataprice:'2931.00',
    },
    {
        imgScr : './assets/Si Eau de Perfume.jpg',
        altText : 'Si Eau de Perfume',
        code: 12,
        title: 'Sì Eau de Parfum - Perfume Feminino 100ml',
        description: "Black Orchid é um rico blend de especiarias e escuridão que te envolvem, para estarem perto - cada vez mais - de vocês. Sinta o poder perfeito - ao mesmo tempo raro e extraordinário.",
        origin: 'Itália',
        aromaType: 'Aromático',
        price: '803,57',
        termprice: '200,89',
        dataprice:'803.57',
    },
    {
        imgScr : './assets/Guilty Pour Homme Gucci.jpg',
        altText : 'Guilty Pour Home',
        code: 13,
        title: 'Guilty Pour Homme Gucci Eau de Parfum - Perfume Masculino 90ml',
        description: "O Perfume Masculino Guilty Pour Homme, de Gucci, apresenta a potência da madeira de cedro combinada com notas quentes e um frescor aromático de flor de laranjeira, pimenta chilli, rosa, lavanda, vinagre balsâmico, patchouli e néroli. Entregue-se à liberdade expressa pela declaração ForeverGuilt.",
        origin: 'Itália',
        aromaType: 'Amadeirado',
        price: '814,42',
        termprice: '203,60',
        dataprice:'814.42',
    },
    {
        imgScr : './assets/Mont Blanc Explorer.jpg',
        altText : 'Mont Blanc Explorer',
        code: 14,
        title: 'Mont Blanc Explorer Eau de Parfum - Perfume Masculino 100ml',
        description: "Escalar montanhas, desafiar convenções e explorar os quatro cantos do globo. Da África do Sul ao Haiti, Itália, Alemanha ou Indonésia; o Perfume Masculino Montblanc Explorer Eau de Parfum convida os exploradores a uma jornada fantástica, dando a eles a oportunidade de descobrir os elementos mais raros e os métodos de fabricação que combinam o artesanato com a mais recente tecnologia.",
        origin: 'França',
        aromaType: 'Amadeirado Aromático',
        price: '542,95',
        termprice: '135,74',
        dataprice:'542.95',
    },
    {
        imgScr : './assets/Libre Yves Saint.jpg',
        altText : 'Libre Yves',
        code: 15,
        title: 'Libre Yves Saint Laurent Eau de Toilette - Perfume Feminino 90ml',
        description: "Os mestres em perfume Anne Flipo e Carlos Benaim criam uma reinterpretação da icônica estrutura olfativa de Libre, agora em uma fragrância moderna, fresca e sensual. A tensão entre o frescor da lavanda francesa e a sensualidade da flor de laranjeira marroquina é realçada com o acorde de chá branco.",
        origin: 'França',
        aromaType: 'Floral',
        price: '727,55',
        termprice: '181,89',
        dataprice:'727.55',
    },
    {
        imgScr : './assets/Lday Emblem Montblanc.jpg',
        altText : 'Lday Emblem',
        code: 16,
        title: 'Lady Emblem Montblanc Eau de Parfum - Perfume Feminino 75ml',
        description: "As notas iniciais trazem uma combinação de calor e sabor que vem da pimenta rosa e toranja rosa. O toque feminino vem do Jasmim, Rosa e Romã, que ganham um aspecto maduro e sensual com o fundo almiscarado.",
        origin: 'França',
        aromaType: 'Frutado',
        price: '510,37',
        termprice: '127,59',
        dataprice:'510.37',
    },
    {
        imgScr : './assets/Givenchy Pi.jpg',
        altText : 'Givenchy Pi',
        code: 17,
        title: 'Givenchy Pi Eau de Toilette - Pefume Masculino 100ml',
        description: "A fragrância Pi eau de toilette oferece a frescura perfeita para días quentes. Por ser caracterizada por seus aromas leves, você pode usar a quantidade que quiser sem medo de exagerar.",
        origin: 'França',
        aromaType: 'Amadeirado',
        price: '629,82',
        termprice: '157,46',
        dataprice:'629.82',
    },
    {
        imgScr : './assets/hugo boss.jpg',
        altText : 'hugo boss',
        code: 18,
        title: 'Hugo Boss The Scent Eau de Toilette - Perfume Masculino 100ml',
        description: "Para quem usa o perfume Hugo Boss The Scent, seduzir é uma arte e o equilíbrio perfeito está entre a confiança e a indiferença. Por isso, as notas picantes, frutais e intensas se unem para compor um aroma que dura e não é facilmente esquecido.",
        origin: 'Alemanha',
        aromaType: 'Aromático especiarado',
        price: '564,67',
        termprice: '141,17',
        dataprice:'564.67',
    },
    {
        imgScr : './assets/Dolce Gabbana Light Blue.jpg',
        altText : 'Dolce Gabbana',
        code: 18,
        title: 'Dolce & Gabbana Light Blue Eau de Toilette - Perfume Feminino 100ml',
        description: "O perfume Light Blue feminino é uma impressionante fragrância que evoca o espírito da Itália. O céu infinito, o mar profundo, as noites deslumbrantes e a alegria contagiante das pessoas. Aroma floral e frutal, que combina cedro siciliano com folhas de maçã verde, capturando a essência de um verão ensolarado na Sicília. O frescor do bambu, a intensidade do jasmim e o encanto da rosa branca, fundem-se às madeiras cítricas, ao âmbar e à delicada carícia do almíscar.",
        origin: 'França',
        aromaType: 'Floral Frutado',
        price: '553,81',
        termprice: '138,45',
        dataprice:'553.81',
    },
    {
        imgScr : './assets/Givenchy Pi.jpg',
        altText : 'Givenchy',
        code: 19,
        title: 'Givenchy Pi Eau de Toilette - Pefume Masculino 100ml',
        description: "A fragrância Pi eau de toilette oferece a frescura perfeita para días quentes. Por ser caracterizada por seus aromas leves, você pode usar a quantidade que quiser sem medo de exagerar.",
        origin: 'França',
        aromaType: 'Amadeirado',
        price: '629,82',
        termprice: '157,46',
        dataprice:'629.82',
    },
    {
        imgScr : './assets/Creed Aventus.jpg"',
        altText : 'Creed Aventus',
        code: 20,
        title: 'Creed Aventus Eau de Parfum - Perfume Masculino 100ml',
        description: "O Perfume Masculino Aventus, de Creed, é inspirado na vida dramática de guerra, paz e romance vivido pelo Imperador Napoleão. Os melhores ingredientes foram selecionados a mão para esta composição provocante, masculina e otimista como um esforço conjunto. A garrafa é adornada com um emblema de prata de um cavalo e cavaleiro. Um frasco clássico e poderoso que destaca a seletividade da fragrância, a alta qualidade de suas notas surpreendentes. Fica claro o perfil do homem bem sucedido, elegante, poderoso e charmoso no frasco, conferindo o status, a conquista e a alta classe a este homem.",
        origin: 'França',
        aromaType: 'Frutado',
        price: '3.311,98',
        termprice: '828,00',
        dataprice:'3311.98',
    },
    {
        imgScr : './assets/Yves Saint Laurent Myslf.jpeg',
        altText : 'Yves Saint',
        code: 21,
        title: 'Yves Saint Laurent Myslf Eau de Parfum - Perfume Masculino 100ml',
        description: "Yves Saint Laurent é uma fragrância masculina que pertence à família olfativa aromática. Projetada especialmente para homens com sabor sofisticado, essa fragrância foi lançada no mercado em 2023. As notas principais são bergamota e bergamota da Calábria, que fornecem um toque cítrico refrescante. A Heart Note é a flor da laranjeira tunisina, o que lhe confere um caráter floral e exótico. As notas de base são Ambrofix'™ e patchouli, que fornecem profundidade e durabilidade ao perfume. Este perfume vem em formato spray, fácil e conveniente de aplicar. Com um volume de 100 mL, tem o tamanho perfeito para levar na bolsa ou na bagagem de mão. Produzido na França, esse perfume reflete a elegância e o luxo da perfumaria francesa.",
        origin: 'França',
        aromaType: 'Aromático',
        price: '890,44',
        termprice: '222,61',
        dataprice:'890.44',
    },
];

const productsContainer = document.getElementById('products-container');
products.forEach(product =>{
    const productCard = createProductCard(product);
    productsContainer.appendChild(productCard);
});