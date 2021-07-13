const productsData = [
  {
    title: "Aceite de Palta",
    price: 290,
    description:
      "Los componentes de este aceite, sus ácidos grasos Omega 3 y las vitaminas, principalmente las vitaminas A, D, E y K hacen del aceite de aguacate un aliado para el cuidado de la piel. Las propiedades antioxidantes, proporcionadas principalmente por las vitaminas K y E, contribuyen a regenerar y rejuvenecer la piel.",
    image: "https://i.postimg.cc/RCw7CM1B/Aceite-de-Palta.jpg",
    images: [
      "https://i.postimg.cc/wvPwTRXZ/aceite-de-palta-1.jpg",
      "https://mejorconsalud.as.com/wp-content/uploads/2015/06/Aceite-de-aguacate.jpg",
      "https://www.hogarmania.com/archivos/202103/usos-beneficios-del-aceite-vegetal-de-aguacate-en-el-cabello-y-el-cuerpo-portada-668x400x80xX-1.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Aceite de Semilla de Uva",
    price: 300,
    description:
      "El aceite de semilla de uva está compuesto por un 70 % de ácido graso esencial alfo-linoleico, también conocido como omega-6 y un 20 % de ácido oleico u omega-9, lo que ayuda a ralentizar el envejecimiento de la piel, entre otras muchas cualidades. Tiene un alto contenido en vitamina-E, proantocianidina, resveratrol y bioflavonoides, lo que lo convierte en un aceite excepcional para nuestra piel y en general para contrarrestar los radicales libres.",
    image: "https://i.postimg.cc/GhQvYqSg/Aceite-de-Semilla-de-Uva.jpg",
    images: [
      "https://i.postimg.cc/CMBvrJYg/aceite-de-semilla-de-uva-1.jpg",
      "https://i.blogs.es/2b1521/img_9263/450_1000.jpg",
      "https://nutricionsinmas.com/wp-content/uploads/2015/09/aceite-semilla-uva.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Calendula Seca",
    price: 430,
    description:
      "La caléndula, con sus acciones antiséptica, antiinflamatoria y cicatrizante, lo tiene todo. Ya hace más de 3.000 años, los egipcios la consideraban una planta milagrosa y, posteriormente, los griegos y romanos la utilizaban para curar muchas de sus enfermedades o dolencias.",
    image: "https://i.postimg.cc/T33gcgzd/Calendula-Seca.jpg",
    images: [
      "https://i.postimg.cc/v8J0J9H6/calendula-seca-1.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_942440-MLU43275332774_082020-O.jpg",
      "https://image.freepik.com/foto-gratis/primer-plano-flor-calendula-seca-planta_52504-5.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Crema Base",
    price: 190,
    description:
      "Base para hacer cremas corporales y faciales, que nutre e hidrata en profundidad, con la posibilidad de incluir aceites vegetales, aceites esenciales o principios activos adicionales.",
    image: "https://i.postimg.cc/c4ZQrVT8/Crema-Base.jpg",
    images: [
      "https://i.postimg.cc/yxZvJ6nd/crema-base-1.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_733255-MLM31368617388_072019-O.jpg",
      "https://www.tutallernatural.com/blog/wp-content/uploads/BA2A4907-res-540x317.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Hidrolato de Manzanilla",
    price: 540,
    description:
      "Los hidrolatos son la sustancia acuosa que se extrae en el proceso de destilación de la planta donde se obtiene también el aceite esencial de la misma. Poseen las propiedades esenciales volátiles por lo cual son muy efectivos.",
    image: "https://i.postimg.cc/0yCx9Jjw/Hidrolato-de-Manzanilla.jpg",
    images: [
      "https://i.postimg.cc/4xZBdgcf/hidrolato-de-manzanilla-1.jpg",
      "https://www.ladespensadeljabon.com/WebRoot/StoreES3/Shops/ec4758/56FF/08A0/B50E/EBB4/3A3A/52DF/D016/46E7/10761712_s.jpg",
      "https://www.somosbellas.com/wp-content/uploads/2019/09/manzanilla-usos-cosmeticos.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Manteca de Cacao",
    price: 610,
    description:
      "Previene la aparición de arrugas y estrías dado su alto poder de hidratación y mejora en general la elasticidad de la piel gracias a su acción nutritiva. Ayuda a regenerar la película hidrolipídica de las pieles deshidratadas. Tiene propiedades antioxidantes y ayuda a combatir los efectos dañinos del tiempo.",
    image: "https://i.postimg.cc/jjdT2dnk/Manteca-de-Cacao.jpg",
    images: [
      "https://i.postimg.cc/m27mBDtp/manteca-de-cacao-1.jpg",
      "https://i2.wp.com/rayosenelcabello.com/wp-content/uploads/2020/05/manteca-de-cacao-para-el-cabello.jpg?fit=513%2C347&ssl=1",
      "https://www.loveisinmyhair.com/sites/default/files/styles/large/public/p/portada-manteca.jpg?itok=z99VMBGh",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Manzanilla Seca",
    price: 230,
    description:
      "La camomila, también llamada manzanilla, es considerada como una de las plantas naturales que mayor beneficio tiene sobre nuestra piel. El mejor tratamiento corporal con poder para limpiar, desinflamar y desintoxicar la piel de forma sencilla sobre todo para pieles muy delicadas y secas",
    image: "https://i.postimg.cc/BvY0K9xZ/Manzanilla-Seca.jpg",
    images: [
      "https://i.postimg.cc/QMYb0KyC/manzanilla-seca-1.jpg",
      "https://http2.mlstatic.com/D_NQ_NP_805125-MLU43207065191_082020-O.jpg",
      "https://st2.depositphotos.com/7264238/i/600/depositphotos_115593782-stock-photo-dry-chamomile-on-wooden-boards.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Manteca de Karite",
    price: 760,
    description:
      "La manteca de karité se extrae de las nueces de karité, el fruto de un árbol que crece en las sabanas de África occidental. Aunque es un producto comestible, es principalmente conocido por sus propiedades cosméticas, hidratantes, regeneradoras y suavizantes para la piel. ",
    image: "https://i.postimg.cc/k42dN1cQ/Mateca-de-Karite.jpg",
    images: [
      "https://i.postimg.cc/nLh24GTN/manteca-de-karite-1.jpg",
      "https://www.clikisalud.net/wp-content/uploads/2019/11/manteca-de-karite.jpg",
      "https://www.spacionatural.cl/tiendaweb/415-large_default/manteca-de-karite-12-kilo.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Remolacha en Polvo",
    price: 120,
    description:
      "La remolacha es una bomba de minerales y nutrientes. Tiene un sabor dulce y fuerte al mismo tiempo, de forma que resulta un poco peculiar. Normalmente se toma en zumos y en ensaladas. Pues bien, además de ser un alimento fantástico para cuidar la salud, los beneficios de la remolacha para la piel son muy amplios.",
    image: "https://i.postimg.cc/NMZvd6JW/Remolacha-en-Polvo.jpg",
    images: [
      "https://i.postimg.cc/jSXvnF6z/remolacha-en-polvo-1.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61jnNwWl6DL._SX679_.jpg",
      "https://i.etsystatic.com/14842429/r/il/6f6aba/2794794891/il_570xN.2794794891_2hwp.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
  {
    title: "Arcillas",
    price: 180,
    description:
      "Arcilla verde: es ideal para el cuidado de pieles grasas, mixtas y con acné, así como para personas con eccema o psoriasis. Sus principales beneficios incluyen la desinfección, limpieza y regeneración. Gracias a sus propiedades antisépticas, la arcilla verde inhibe la multiplicación de bacterias, y gracias a sus propiedades astringentes, retrasa la aparición de arrugas.",
    image: "https://i.postimg.cc/yd0kX6Wp/arcillas-main.jpg",
    images: [
      "https://i.postimg.cc/NjP9QPWD/arcilla-thumb-1.jpg",
      "https://i.postimg.cc/437KyQGg/arcilla-thumb-2.jpg",
      "https://i.postimg.cc/cJpvnt18/arcilla-thumb-3.jpg",
    ],
    isFavourite: false,
    qty: 1,
  },
];

module.exports = productsData;
