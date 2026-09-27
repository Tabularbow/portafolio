const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");
const topBtn = document.getElementById("topBtn");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Menú móvil
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Modo claro / oscuro
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☀";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☾";
        localStorage.setItem("theme", "dark");
    }
});

// Mantener el tema seleccionado
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "☀";
}

// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// Botón para volver arriba
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Validación básica del formulario
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        formMessage.textContent = "Por favor, completa todos los campos.";
        return;
    }

    formMessage.textContent =
        `Gracias, ${nombre}. El formulario fue validado correctamente.`;

    contactForm.reset();
});
