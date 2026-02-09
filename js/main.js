const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', navList.classList.contains('active'));
    });
}

// factory para inicializar carrosséis independentes
const setupCarousel = (carouselId) => {
    const container = document.querySelector(carouselId);
    if (!container) return;

    const track = container.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextBtn = container.querySelector('.carousel__btn--next');
    const prevBtn = container.querySelector('.carousel__btn--prev');
    let currentIndex = 0;

    const update = () => {
        // cálculo dinâmico da largura para responsividade
        const width = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        update();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        update();
    });

    window.addEventListener('resize', update);
};

const projectsData = [
    {
        title: "PetMatch Mobile",
        description: "App nativo (Android/Kotlin) para adoção de pets com geolocalização e foco em UX.",
        image: "./assets/project-petmatch.png",
        techs: ["Kotlin", "OAuth2.0"],
        repoLink: "https://github.com/giovannicastrodev/pet-match",
        linkedinLink: "https://www.linkedin.com/posts/giovannicastromagalhaes_androiddev-kotlin-jetpackcompose-activity-7403609869473275904-wydY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKNKxEBpek0s7H8h9xlyhnwnyiyN5And8w"
    },
    {
        title: "FakeAnalyser ChatBot",
        description: "Bot inteligente que analisa textos para identificar fake news usando IA e React.",
        image: "./assets/project-chatbot.jpg",
        techs: ["React", "JavaScript", "HTML", "CSS"],
        repoLink: "https://github.com/giovannicastrodev/fnbook_AIchatbot",
        linkedinLink: "https://www.linkedin.com/posts/giovannicastromagalhaes_you-know-when-you-revisit-old-code-and-see-activity-7402404372208484352-iWRy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKNKxEBpek0s7H8h9xlyhnwnyiyN5And8w"
    },
    {
        title: "ERP de Assentamento",
        description: "Módulo Java para gestão de propriedades rurais, controle de lotes e proprietários.",
        image: "./assets/project-erp.png",
        techs: ["Java", "Swing"],
        repoLink: "https://github.com/giovannicastrodev/erp-assentamento-vendas",
        linkedinLink: null
    }
];

const projectTrack = document.querySelector('#project-carousel .carousel__track');

if (projectTrack) {
    projectTrack.innerHTML = projectsData.map(proj=>{
        const techsHtml = proj.techs
            ? proj.techs.map(t => `<span class="tech-tag">${t}</span>`).join('')
            : '';
        const githubBtn = proj.repoLink
            ? `<a href="${proj.repoLink}" target="_blank" class="btn btn--small">GitHub</a>`
            : '';
        const linkedinBtn = proj.linkedinLink
            ? `<a href="${proj.linkedinLink}" target="_blank" class="btn btn--linkedin">Ver Post</a>`
            : '';

        return `
            <div class="carousel__slide">
                <article class="project-card--wide">

                    <div class="card__image-box">
                        <img src="${proj.image}" alt="${proj.title}" class="card__img">
                    </div>

                    <div class="card__content">
                        <h3 class="card__title">${proj.title}</h3>
                        <p class="card__desc">${proj.description}</p>

                        <div class="card__techs">${techsHtml}</div>

                        <div class="card__actions">
                            ${githubBtn}
                            ${linkedinBtn}
                        </div>
                    </div>

                </article>
            </div>
        `;
    }).join('');

    // inicia carrossel apenas após injeção do dom
    setupCarousel('#project-carousel');
}

setupCarousel('#experience-carousel');

document.getElementById('year').textContent = new Date().getFullYear();