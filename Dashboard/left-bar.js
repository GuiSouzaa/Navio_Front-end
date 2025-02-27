function menu_Hamburger() {
    let menu = document.querySelector(".left-bar");
    menu.classList.toggle("open");
}

// Garante que a barra comece aberta ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".left-bar");
    menu.classList.add("open");
});
