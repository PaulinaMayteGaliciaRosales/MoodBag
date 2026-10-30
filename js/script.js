//DATOS PARA FILTRAR //
const dwpaulina = [
    { id: 1, name: "Bolsos para reflejar tu personalidad.", image: "img/img1.jpg", genero: "personalizar", description: "MoodBag se adapta a tu estilo" },
    { id: 2, name: "Crea tu bolso.", image: "img/img2.jpg", genero: "personalizar", description: "Diseña tu bolso a medida." },
    { id: 3, name: "Escoge el estilo que te represente.", image: "img/img3.jpg", genero: "personalizar", description: "Elige el diseño que más te guste." },
    { id: 4, name: "Diseñalo y crealo.", image: "img/img4.jpg", genero: "personalizar", description: "Siéntete cómoda con tu bolso personalizado." },

    { id: 5, name: "Encuéntralo.", image: "img/imgg1.jpg", genero: "colección", description: "Encuentra el bolso que más te guste." },
    { id: 6, name: "Diseños para todos los gustos.", image: "img/imgg2.jpg", genero: "colección", description: "MoodBag tiene un bolso para cada estilo y personalidad." },
    { id: 7, name: "Bolsos para todos los gustos.", image: "img/imgg3.jpg", genero: "colección", description: "Elige el diseño que más te guste." },
    { id: 8, name: "Diseñalo y crealo.", image: "img/imgg4.jpg", genero: "colección", description: "Adapta tu bolso a tu estilo." },
];

const dwpaulinaContainer = document.getElementById("productos-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderDw(genero = "all") {
    if (!dwpaulinaContainer) return;

    const categoria = String(genero || "all").trim().toLowerCase();
    const dwpaulinaToRender = categoria === "all"
        ? [...dwpaulina]
        : dwpaulina.filter(item => String(item.genero).trim().toLowerCase() === categoria);

    dwpaulinaContainer.innerHTML = "";

    if (!dwpaulinaToRender.length) {
        dwpaulinaContainer.innerHTML = '<p class="text-center w-100">No hay disponibles para esta categoría.</p>';
        return;
    }

    if (categoria === "all") {
        dwpaulinaToRender.sort(() => Math.random() - 0.5);
    }

    dwpaulinaToRender.forEach((dw) => {
        const cardHtml = `
            <figure class="Personalizar-card" data-gender="${dw.genero}">
                <img src="${dw.image}" alt="MoodBag venta de bolsos, nombre: ${dw.name}">
                <figcaption>${dw.name}</figcaption>
                <div class="card-description">
                    <p>${dw.description}</p>
                </div>
            </figure>
        `;
        dwpaulinaContainer.innerHTML += cardHtml;
    });
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const categoria = String(button.dataset.category || "all").trim().toLowerCase();

        filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
        renderDw(categoria);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const activeButton = document.querySelector('.filter-btn.active') || document.querySelector('[data-category="all"]');
    if (activeButton) {
        activeButton.classList.add("active");
    }
    renderDw("all");
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

