const background = document.getElementById("background");

function createCircle(color, size, left, top) {
    let circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.background = color;
    circle.style.width = size + "px";
    circle.style.height = size + "px";
    circle.style.left = left + "px";
    circle.style.top = top + "px";
    background.appendChild(circle);
    return circle;
}

// Criando dois círculos coloridos
let circle1 = createCircle("rgba(255, 0, 150, 0.8)", 200, window.innerWidth / 3, window.innerHeight / 3);
let circle2 = createCircle("rgba(0, 255, 200, 0.8)", 250, window.innerWidth / 1.5, window.innerHeight / 2);

window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // Prolongando a duração do efeito aumentando a divisão dos valores
    let factor = scrollY * 0.0005;

    // Aumentando os tamanhos dos círculos de forma progressiva
    let size1 = 200 + (scrollY * 0.5) % 600; // Agora cresce mais
    let size2 = 250 + (scrollY * 0.5) % 600;

    circle1.style.width = size1 + "px";
    circle1.style.height = size1 + "px";
    circle2.style.width = size2 + "px";
    circle2.style.height = size2 + "px";

    // Movimento mais contínuo e suave pelos lados e na vertical
    let moveX1 = Math.sin(factor * 50) * 150;
    let moveY1 = Math.cos(factor * 40) * 100;
    let moveX2 = Math.cos(factor * 60) * 180;
    let moveY2 = Math.sin(factor * 50) * 120;

    circle1.style.transform = `translate(${moveX1}px, ${moveY1}px) rotate(${factor * 500}deg)`;
    circle2.style.transform = `translate(${moveX2}px, ${moveY2}px) rotate(${-factor * 500}deg)`;
});


function fadeInOnScroll() {
    let elements = document.querySelectorAll('.fade-in');
    let windowHeight = window.innerHeight;

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < windowHeight - 50) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);