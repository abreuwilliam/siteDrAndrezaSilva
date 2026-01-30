function agendarConsulta() {
    const whatsapp = "https://wa.me/5561992100173?text=Olá! Gostaria de agendar uma consulta.";
    window.open(whatsapp, "_blank");
}
const header = document.getElementById('header');


window.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});



/* ===== ANIMAÇÃO AO SCROLL ===== */

const elementos = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(el => observer.observe(el));



let currentFeedback = 0;

// Exemplo: cada array interno representa um par de fotos que aparecerá no slider
const gruposDeMensagens = [
    ["print1_a.jpg", "print1_b.jpg"],
    ["print2_a.jpg", "print2_b.jpg"],
    ["print3_a.jpg", "print3_b.jpg"]
];

function moveSlider(direction) {
    currentFeedback += direction;

    if (currentFeedback >= gruposDeMensagens.length) currentFeedback = 0;
    if (currentFeedback < 0) currentFeedback = gruposDeMensagens.length - 1;

    const imagens = document.querySelectorAll('.img-print');
    imagens[0].src = gruposDeMensagens[currentFeedback][0];
    imagens[1].src = gruposDeMensagens[currentFeedback][1];
}

function handlePhone(event) {
    const input = event.target;
    input.value = phoneMask(input.value);
}

function phoneMask(value) {
    if (!value) return "";

    value = value.replace(/\D/g, ""); // remove tudo que não for número
    value = value.substring(0, 11);   // limita a 11 dígitos

    // (00)
    if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "($1) $2");
    }

    // (00) 00000-0000
    if (value.length > 7) {
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }

    return value;
}

