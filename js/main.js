// seleciona elementos do menu mobile
const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // acessibilidade: avisa leitores de tela se está aberto ou não
    const isActive = navList.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isActive);
});

/* --- lógica do carrossel --- */
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children); // converte a lista html em array js real para usarmos métodos de lista
const nextButton = document.querySelector('.carousel__btn--next');
const prevButton = document.querySelector('.carousel__btn--prev');

let currentSlideIndex = 0;

const updateCarousel = () => {
    // pega a largura exata do slide em pixels para o calculo ser preciso
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // calcula quantos pixels precisamos deslocar para a esquerda
    const amountToMove = currentSlideIndex * slideWidth;
    track.style.transform = `translateX(-${amountToMove}px)`;
}

nextButton.addEventListener('click', () => {
    // evita erro ao tentar passar do ultimo slide
    if (currentSlideIndex < slides.length - 1) {
        currentSlideIndex++;
        updateCarousel();
    } else {
        // loop infinito: volta para o primeiro
        currentSlideIndex = 0;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateCarousel();
    } else {
        // loop infinito: vai para o ultimo
        currentSlideIndex = slides.length - 1;
        updateCarousel();
    }
});

// garante que o carrossel se ajuste se o usuário redimensionar a tela
window.addEventListener('resize', () => {
    updateCarousel();
});

/* --- projetos dinâmicos --- */
const projectsData = [
    {
        title: "PetMatch",
        description: "Aplicativo mobile nativo para adoção de animais, focado em UX e geolocalização.",
        tech: ["Kotlin", "OAuth 2.0", "Supabase"],
        repolink: "#",
        demoLink: "https://www.linkedin.com/posts/giovannicastromagalhaes_androiddev-kotlin-jetpackcompose-activity-7403609869473275904-wydY"
    },
    {
        title: "FakeAnalyser ChatBot",
        description: "Bot inteligente que analisa textos para identificar possíveis fake news usando PLN.",
        tech: ["React", "JavaScript", "NodeJS"],
        repolink: "#",
        demoLink: "https://www.linkedin.com/posts/giovannicastromagalhaes_you-know-when-you-revisit-old-code-and-see-activity-7402404372208484352-iWRy"
    },
    {
        title: "LogFinder",
        description: "Ferramenta desktop para varredura e análise rápida de logs de erro em servidores.",
        tech: ["Python", "Tkinter"],
        repolink: "#",
        demoLink: "#"
    }
];

const projectsContainer = document.querySelector('.projects__grid');

const createProjectCard = (project) => {
    // map percorre cada tecnologia e cria o html da etiqueta (span)
    // join('') une todas as etiquetas em um único texto, sem vírgulas
    const tagsHtml = project.tech
        .map(tech => `<span class="project-card__tag">${tech}</span>`)
        .join('');

    // retorna o template string (html com variáveis js)
    return `
        <article class="project-card">
            <div class="project-card__header">
                <h3 class="project-card__title">${project.title}</h3>
            </div>

            <div class="project-card__tags">
                ${tagsHtml}
            </div>

            <p class="project-card__desc">
                ${project.description}
            </p>

            <div class="project-card__links">
                <a href="${project.repolink}" target="_blank" class="link link--sm">
                    GitHub
                </a>
                <a href="${project.demoLink}" target="_blank" class="link link--sm">
                    Live Demo
                </a>
            </div>
        </article>
    `;
};

// verifica se o container existe para evitar erro em páginas sem a seção
if (projectsContainer) {
    const allCardsHtml = projectsData.map(createProjectCard).join('');
    projectsContainer.innerHTML = allCardsHtml;
}