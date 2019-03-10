const mongoose = require('mongoose');
const Recipe = require('../models/Recipe'); 

mongoose.connect(process.env.DB)

const recipes = [
  {
    photoURL: 'https://cdn.kiwilimon.com/recetaimagen/27113/th5-320x213-25233.jpg',
    name: 'Filete de Pescado en Salsa de Elote y Cebollín',
    ingredients:  [
     '5 piezas de filete de pescado',
     '2 pizcas de sal',
     '5 cucharadas de harina',
     '3 cucharadas de epazote finamente picado',
     '7 cucharadas de margarina',
     '2 piezas de chile serrano finamente picado',
     '1 lata de crema de elote Campbell´s®',
     '4 cucharaditas de cebollín finamente picado',
     '5 piezas de tortillas de harina horneadas',
     '1/2 taza agua',
    ],
    category: ['Plato fuerte'],
    preparationInstructions: "Sazona los filetes de pescado, mezcla la harina con el epazote. Enharina los filetes de pescado. Calienta la margarina en una sartén mediano a fuego medio y fríe los filetes uno a uno por ambos lados hasta que estén doraditos y cocidos por 10 minutos. Reserva Calienta en una ollita a fuego medio la margarina restante y fríe un poco el chile serrano por 1 minuto. Agrega la crema de elote más ½ lata de agua y cuece a fuego bajo por 10 minutos. Reserva. Coloca una tortilla de harina horneada en un plato extendido, sobre esta un filete de pescado y cubre con la crema de elote. Espolvorea con cebollín finamente picado",
    owner: "5c8489b30cb70511b9dcaa3a"
  },
  {
    photoURL:"https://cdn.kiwilimon.com/recetaimagen/27112/25230.jpg",
    name: 'Carne de res en salsa poblana',
     ingredients:  [
       '3 cucharaditas de aceite',
      '1/2 pieza de cebolla finamente picada',
      '1 diente de ajo finamente picado',
      '3 tazas de filete de res cortado en cubitos',
      '2 tazas de calabaza cortada en cubitos',
      '2 latas de Crema de chile poblano Campbell´s®',
      '3 cucharadas de perejil',
      '1 taza de agua'
       ],
     category: ['Plato fuerte'],
     preparationInstructions: "Calienta el aceite en una sartén a fuego medio, agrega la cebolla, el ajo y fríe por 2 minutos, sube el fuego y añade la carne continua la cocción por 3 minutos. Retira el exceso de grasa si es necesario, agrega la calabaza y cocina por 2 minutos. Vierte la crema de chile poblano más una lata de agua, baja el fuego y cuece por 10 minuto; agrega el perejil. Retira del fuego.",
     owner: "5c8489b30cb70511b9dcaa3a"
  },
  {
    photoURL:'https://cdn.kiwilimon.com/recetaimagen/28733/29585.jpg',
    name: 'Ensalda de aguacate, fresas y pechuga de pollo',
     ingredients:  [
      '1 taza de vinagre balsámico',
      '1/2 taza de azúcar',
      '1 cucharada de ajo finamente picado',
      '1/2 cucharada de tomillo',
      '4 cucharadas de Queso Panela Reducido en Grasa FUD® cortado en bastones medianos',
      '1 pieza de aguacate cortado en gajos',
      '2 tazas de lechuga mixta',
      '1 pieza de pepino cortado en láminas y enrollarlas',
      '2 piezas de zanahoria rallada',
      '1 taza de fresa cortadas en mitades',
      '10 rebanadas de Pechuga de pollo Rostizada FUD® cortada en tiritas',
       ],
     category: ['Ensalada'],
     preparationInstructions: "Para la vinagreta, calienta en una ollita a fuego medio el vinagre balsámico, agrega el azúcar, el ajo, el tomillo y cocina para que se reduzca a la mitad. Reserva la vinagreta. Calienta una sartén parrilla a fuego alto y parrilla el aguacate y el Queso Panela Reducido en Grasa FUD® hasta obtener las marcas clásicas del parrillado. Reserva. En un bowl mezcla las lechugas, el pepino, las zanahorias y las fresas. Sirve en un plato y agrega el aguacate y el Queso parrillada y la Pechuga de pollo Rostizada FUD® Acompaña con la vinagreta.",
     owner: "5c8489b30cb70511b9dcaa3a"
  },
  
  {
    photoURL:'https://cdn.kiwilimon.com/recetaimagen/16304/th5-640x426-8247.jpg',
    name: 'Ensalda de col rizada con mango y pepitas',
     ingredients:  [
     '1 manojo de col rizada',
     '1 limón su jugo',
    '1/4 de taza de aceite de oliva extra virgen',
      '2 cucharadas de miel',
     ' pimientas recién molida',
     '1 mango picado en cubos',
     '1/4 de taza de pepita (Semillas de Calabaza rostizadas en Sal)',
       ],
     category: ['Ensalada'],
     preparationInstructions: "Para empezar debes desinfectar la col rizada con el método de tu elección. Ahora corta los tallos de cada una de las hojas de col rizada, después empieza a cortar en listones (Enrolla varias hojas de col y empieza picarlas en forma de tiras gruesas) En un bowl grande agrega la col, el jugo de medio limón, un poco de aceite de oliva y con tus manos revuelve la Ensalada hasta que se suavice la Col. Reservar. En un pequeño bowl, revuelve lo que quedo del jugo de limón con miel y bastante pimienta molida, agrega 1/4 de taza de Aceite de oliva y continua revolviendo hasta que tenga la consistencia de un aderezo y te guste el sabor, puedes agregarle Sal. Vierte el Aderezo sobre la Ensalada de Col y como toque final agrega el Mango y las Pepitas, revuelve y sirve en 4 platos individuales.",
     owner: "5c8489b30cb70511b9dcaa3a"
  }
]

Recipe.create(recipes)
  .then(recipes=>{
    console.log(`Recipes created`)
    mongoose.connection.close()
  })

