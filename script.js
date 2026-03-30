// Seleciona o botão e o menu
const toggleBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

// Alterna a visibilidade do menu ao clicar no botão
toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Fecha o menu automaticamente quando um link é clicado (em mobile)
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Scroll suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
