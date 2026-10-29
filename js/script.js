//DATOS PARA FILTRAR //
// Primer filtro: personalizar //

const dwpaulina = [
    //personalizar //
    {id: 1, name: "Bolsos para reflejar tu personalidad.", image: "img/img2.jpg", genero: "personalizar",description: "MoodBag tiene un bolso para cada estílo y personalidad."}, 
    {id: 2, name: "Crea tu bolso.", image: "img/img3.jpg", genero: "personalizar",description: "Diseña tu bolso a medida."}, 
    {id: 3, name: "Escoge el estilo que te represente.", image: "img/img4.jpg", genero: "personalizar",description: "Elige el diseño que más te guste."}, 
    {id: 4, name: "Diseñalo y crealo.", image: "img/img1.jpg", genero: "personalizar",description: "Sientete comoda con tu bolso personalizado."}, 

    //colección//
    {id: 5, name: "Encuentralo.", image: "img/imgg1.jpg", genero: "colección",description: "Encuentra el bolso que más te guste."}, 
    {id: 6, name: "Diseños para todos los gustos.", image: "img/imgg2.jpg", genero: "colección",description: "MoodBag tiene un bolso para cada estílo y personalidad."}, 
    {id: 7, name: "Bolsos para todos los gustos.", image: "img/imgg3.jpg", genero: "colección",description: "Elige el diseño que más te guste."}, 
    {id: 8, name: "Diseñalo y crealo.", image: "img/imgg4.jpg", genero: "colección",description: "Sientete comoda con tu bolso personalizado."},
];

// Obtener los contenedores y botones del DOM
const dwpaulinaContainer = document.getElementById("productos-container");
const filterButtons = document.querySelectorAll(".filter-btn");


// Función para renderizar las tarjetas 
function renderDw(genero) {
    let dwpaulinaToRender = [];
    if (genero === "all") {
        dwpaulinaToRender = dwpaulina; 
    } else {
        dwpaulinaToRender = dwpaulina.filter(Dwpaulina => Dwpaulina.genero === genero);
    }
}