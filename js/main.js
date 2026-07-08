// Carrega o template do componente
async function loadComponent(path) {
    const response = await fetch(path);
    return await response.text();
}

// Lista de eventos organizados por slides
const slides = [
    [
        {
            tipo: "abertura",
            titulo: "Abertura",
            horario: "08:30 às 09:00",
            local: "Brasília e São Paulo"
        },
        {
            tipo: "painel",
            titulo: "Painel 1 — Testando primeiro caso",
            horario: "09:00 às 09:50",
            local: "Brasília",
            participantes: "Mario"
        },
        {
            tipo: "intervalo",
            titulo: "Intervalo",
            horario: "09:50 às 10:00"
        }
    ],
    [
        {
            tipo: "painel",
            titulo: "Painel 2 — Segundo caso expositivo",
            horario: "10:00 às 10:50",
            local: "São Paulo",
            participantes: "Jorge e Luciano"
        },
        {
            tipo: "brindes",
            titulo: "Sorteio de Brindes",
            horario: "10:50 às 11:20",
            local: "Brasília e São Paulo"
        },
        {
            tipo: "painel",
            titulo: "Painel 3 — Caso 3 discussão",
            horario: "11:20 às 12:10",
            local: "Brasília",
            participantes: "André e Gabriel"
        }
    ],
    [
        {
            tipo: "intervalo",
            titulo: "Intervalo — Almoço",
            horario: "12:10 às 13:40",
            local: "Brasília e São Paulo"
        },
        {
            tipo: "painel",
            titulo: "Painel 4 — Quarto caso de análise",
            horario: "13:40 às 15:00",
            local: "Brasília",
            participantes: "Matheus e Pedro"
        },
        {
            tipo: "encerramento",
            titulo: "Encerramento",
            horario: "15:00 às 16:00",
            local: "Brasília e São Paulo"
        }
    ]
];

// Monta o carrossel dinamicamente
async function buildCarousel() {
    const template = await loadComponent("components/event-card.html");
    const carouselContent = document.getElementById("carousel-content");

    slides.forEach((slideEvents, index) => {
        const slide = document.createElement("div");
        slide.className = "carousel-item" + (index === 0 ? " active" : "");

        const row = document.createElement("div");
        row.className = "row g-4 justify-content-center";

        slideEvents.forEach(event => {
            let cardHTML = template
                .replace("{{tipo}}", event.tipo)
                .replace("{{titulo}}", event.titulo)
                .replace("{{horario}}", event.horario ? `<p><strong>Horário:</strong> ${event.horario}</p>` : "")
                .replace("{{local}}", event.local ? `<p><strong>Local:</strong> ${event.local}</p>` : "")
                .replace("{{participantes}}", event.participantes ? `<p><strong>Participantes:</strong> ${event.participantes}</p>` : "");

            const col = document.createElement("div");
            col.className = "col-md-4";
            col.innerHTML = cardHTML;

            row.appendChild(col);
        });

        slide.appendChild(row);
        carouselContent.appendChild(slide);
    });
}

buildCarousel();

