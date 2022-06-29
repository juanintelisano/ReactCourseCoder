import anglo from "./assets/image/Anglo-Arabian.jpg";


const Productos = [
    {
      "price": 7000,
      "id": 1,
      "title": "Argentine Criollo",
      "imgURL": <img src ={anglo}/>,
      "tic": "./public/image/argFLAG.png",
      "stock": "5",
      "categoryId": "base",
      "description":"Su tipo es el de un caballo de silla, equilibrado y armonioso, musculoso y de buena constitución con su centro de gravedad bajo, de buen pie y desatado, ágil y rápido en sus movimientos, de carácter activo, enérgico y dócil, el caballo Criollo se caracteriza por su rusticidad, longevidad, fertilidad, resistencia, valor, poder de recuperación y habilidades en ganadería. Su tamaño ideal, es de 1.44 metros, pero puede fluctuar entre 1.38 y 1.5. Los Criollos muy a menudo tienen cebra en las piernas y una línea de mula típica de las razas muy antiguas."
    },
    {
      "price": 9000,
      "id": 2,
      "title": "Anglo-Arabian",
      "imgURL": {anglo},
      "tic": "./public/image/arab.png",
      "stock": "5",
      "categoryId": "medium",
      "description":"Originalmente es un poco más alto que el árabe, pero su tamaño ha tendido a aumentar, y ya no son raros los ejemplares de 1,66 metros a la cruz. Es un caballo con una cabeza pequeña y delgada e inteligente, con ojos muy abiertos y expresivos, una frente amplia y orejas móviles y muy alerta, dotado de una fuerte personalidad, lo que requiere, por tanto, un jinete experimentado, tacto y una mano fina."
    },
    {
      "price": 7500,
      "id": 3,
      "title": "Blazer horse",
      "imgURL": "./public/image/blazer.jpg",
      "tic": "./public/image/usaFlag.png",
      "stock": "5",
      "categoryId": "medium",
      "description":"Las características del caballo Blazer son las siguientes: altuta de 155 cm, cabeza refinada, ojos redondos, hombros inclinados, Grupa redonda, espalda corta y ancha, ancas redondas, caderas largas, huesos gruesos. Las capas principales de este caballo son alazán, bayo, castaño gris, negro y palomino Lo suficientemente dócil para que cualquier miembro de la familia lo maneje, los Blazer también se desempeñan bien en diferentes deportes ecuestres. Los caballos blazer son animales amables, inteligentes y dóciles."
      
    },
    {
      "price": 10000,
      "id": 4,
      "title": "Corsican horse",
      "imgURL": "./public/image/Corsican horse.jpg",
      "tic": "./public/image/FRFlag.png",
      "stock": "5",
      "categoryId": "medium",
      "description":"El caballo Corsican, posee uan altura que ronda los 130 y 152 cm, tiene un pelaje negro pangaré castaño en todas sus matices. Utilizado en centros ecuestres, el Caballo corso ofrece una caballería de remonta, muy versátil, resistente y frugal. Su velocidad, fuerza y ​​carácter permiten que sea muy competente en el deporte para las carreras de endurance. Compacto, fácil de manejar, combina vivacidad y frialdad, el caballo corso es adecuado para la separación de ganado y la monta western. Adaptado a su territorio, el caballo corso de paso seguro y ágil sobresale en la práctica del senderismo.El caballo corso es un caballo para montar muy adaptado para moverse por los caminos más peligrosos de Córcega. También fue un excelente y reconocido caballo de enganche."
    },
    {
      "price": 10000,
      "id": 5,
      "title": "East Bulgarian",
      "imgURL": "./public/image/East Bulgarian.jpg",
      "tic": "./public/image/BulgariaFlag.png",
      "stock": "5",
      "categoryId": "medium",
      "description": "Su altura es de hasta 165 cm, cabeza de tamaño mediano, fina y con perfil recto. Ojos grandes y animados. Cuello musculado, largo y recto. Cruz prominente. Hombros fuertes. Pecho amplio y pleno. Dorso recto y largo. Grupa ligeramente inclinada.Patas musculadas y bien hechas. Cascos duros y bien formados. Capas principales: alazán, castaño y negro. Increíblemente resistentes, versátiles y atléticos. Estos caballos se utilizan principalmente para montar y para el trabajo de tiro y también son habituales en varias competiciones de deportes ecuestres incluyendo doma y salto de obstáculos. Su carácter es de temperamento amable y tranquilo pero enérgico."
    },
    {
      "price": 15000,
      "id": 6,
      "title": "Haflinger",
      "imgURL": "./public/image/Haflinger.jpg",
      "tic": "./public/image/AustriaFLAG.png",
      "stock": "5",
      "categoryId": "premium",
      "description":"La altura puede variar entre 137 cm y 152 cm. El pelaje es siempre palomino. La tonalidad del pelaje puede ser desde relativamente clara hasta matices más oscuros. Algunos haflinger muestran la característica o patrón pangas (barriga de tonalidad más clara que el cuerpo)."
    },
    {
        "price": 5000,
        "id": 7,
        "title": "Karabakh horse",
        "imgURL": "./public/image/Karabakh.jpg",
        "tic": "./public/image/ArmenianFlag.png",
        "stock": "5",
        "categoryId": "base",
        "description": "La casta es robusta, fuerte y resistente. No es un caballo grande, 14-15 manos altas o 145-150 centímetro. Tienen cabezas pequeñas, un perfil recto con las amplias frentes y ventanas de la nariz muy capaces de la dilatación. Tienen cuerpos compactos, con los músculos bien definidos y desarrollados. Los hombros son a menudo absolutamente verticales. Su piel es fina y suave con el pelo que destella. Son rápidos y ágiles."
      },
      {
        "price": 8000,
        "id": 8,
        "title": "Malopolski",
        "imgURL": "./public/image/Karabakh.jpg",
        "tic": "./public/image/polska.png",
        "stock": "5",
        "categoryId": "medium",
        "description": "La altura de estos caballos puede llegar hasta los 176 cm. Su morfología es de tipo anglo-árabe. Estos animales se consideran elegantes. La cabeza es ligera y refinada, angulosa y bien proporcionada, muy parecida a la del árabe, con un hocico rectilíneo o ligeramente cóncavo, según la cepa dominante. Las orejas son pequeñas, los ojos vivos e inteligentes. El escote es largo, la cruz bien dibujada, el pecho ancho y profundo, los hombros inclinados. El dorso es largo y la rabadilla redondeada y ligeramente inclinada, con una cola de inserción alta. La parte trasera está bien musculada. Las piernas son musculosas, delgadas y largas, con articulaciones fuertes y pezuñas duras."
      },
      {
        "price": 17000,
        "id": 9,
        "title": "North Swedish Horse",
        "imgURL": "./public/image/North Swedish Horse.jpg",
        "tic": "./public/image/sweden.png",
        "stock": "5",
        "categoryId": "premium",
        "description": "Tiene una cabeza bastante grande, con un cuello corto y grueso, el cuerpo es largo y amplio y la grupa y los posteriores descendentes están vien musculados y redondeados. Sus extremidades son fuertes, y la crin y la cola son tupidas. Es Castaño, castaño oscuro y bayo. La capa de color bayo es típica de los ejemplares que han tenido ponis entre sus antepasados. Su altura se encuentra entre 1,55 y 1,60 metros."
      },
      {
        "price": 15500,
        "id": 10,
        "title": "Pottok",
        "imgURL": "./public/image/Pottok.jpg",
        "tic": "./public/image/spain.png",
        "stock": "5",
        "categoryId": "premium",
        "description": "Rodean los 115 y 132 cm de alzada. De color castaño, negro, alazán, así como todas las variedades de pinto compuestas de uno o varios colores mencionados anteriormente. Poni muy rústico, nativo de las montañas del País Vasco, dócil y generoso, apto para las disciplinas ecuestres o crianza en libertad."
      },
      {
        "price": 20000,
        "id": 11,
        "title": "Schleswig Coldblood",
        "imgURL": "./public/image/Schleswig Coldblood.jpg",
        "tic": "./public/image/denmark.png",
        "stock": "5",
        "categoryId": "premium",
        "description": "El Schleswig Coldblood mide entre 154 y 162 cm. Los sementales son, en promedio, unos 2 cm más altos que las yeguas. Tiene una cabeza corta y recta con ojos amables y una frente ancha; cuello corto con cresta; hombros poderosos; un cuerpo largo con buena profundidad en la circunferencia ; cuartos traseros poderosos; Extremidades cortas y robustas con algo de pluma . Por lo general, es de color castaño claro, aunque pueden aparecer colores grises y oscuros."
      },
      {
        "price": 7000,
        "id": 12,
        "title": "Soviet Heavy Draft",
        "imgURL": "./public/image/Soviet Heavy Draft.jpg",
        "tic": "./public/image/russia.png",
        "stock": "5",
        "categoryId": "base",
        "description": "La cría selectiva que creó el Draft pesado soviético dio como resultado un caballo de construcción masiva con aires de movimiento libre. Tiene un perfil recto o convexo, y un cuello corto. El torso es ancho y musculoso, con una espalda ancha y fuerte y una grupa musculosa e inclinada. El abdomen es redondeado. Las patas son cortas y robustas con articulaciones sólidas y pezuñas anchas y redondeadas."
      },
      {
        "price": 11500,
        "id": 13,
        "title": "Wielkopolski",
        "imgURL": "./public/image/Wielkopolski.jpg",
        "tic": "./public/image/polska.png",
        "stock": "5",
        "categoryId": "premium",
        "description": "El Caballo Wielkopolski es por naturaleza una raza compuesta: no difiere intrínsecamente de otros caballos de silla polacos, ya que la distinción se hizo sobre la base de la introducción del caballo oriental. Está históricamente relacionado con el Trakehner: comparado con el Malopolski, el ejemplar Wielkopolski es más parecido al tipo de caballo germánico. También es un típico mestizo. La altura media oscila entre 1,57 metros y 1,68 metros"
      },
      {
        "price": 12000,
        "id": 14,
        "title": "Zangersheide",
        "imgURL": "./public/image/Zangersheide.jpg",
        "tic": "./public/image/belgium.png",
        "stock": "5",
        "categoryId": "premium",
        "description": "a morfología de estos caballos no tiene una definición precisa, pues incorpora muchos elementos de razas deportivas. Sin embargo, es apreciado como un caballo elegante, con buen espacio para los hombros, músculos fuertes y un tamaño bastante grande. Una espuma delicada y bien definida aporta un valor añadido. Un temperamento destinado a los deportes aumenta las posibilidades de éxito."
      },
      {
        "price": 19250,
        "id": 15,
        "title": "Zweibrücker",
        "imgURL": "./public/image/Zweibrücker.jpg",
        "tic": "./public/image/germany.png",
        "stock": "5",
        "categoryId": "premium",
        "description": "La mejor forma de identificar un Zweibrücker es la marca en el muslo izquierdo. Comprende los dos puentes de la ciudad de Deux-Ponts, coronados por una representación de la corona del Duque. La mayoría de los animales son de peso medio, es decir, tipos antiguos que son un poco más pesados que los tipos modernos. La altura ideal es entre 1,60 y 1,70 m a la edad de tres años, pero no se penaliza a los caballos más grandes o más pequeños."
      }

  ]

//Getting product    
export const getProductById = (id) => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
          resolve(Productos.find(prod => prod.id ===id))
          },500)
  })
}
export const getProductBycategoryId = (categoryId) => {
  return new Promise ((resolve, reject) => {
      setTimeout(() => {
          resolve(Productos.find(prod => prod.categoryId ===categoryId))
          },500)
  })
}


  export default Productos;