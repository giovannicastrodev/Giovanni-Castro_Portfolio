const navToggle = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        // atualiza atributo de acessibilidade para leitores de tela
        navToggle.setAttribute('aria-expanded', navList.classList.contains('active'));
    });
}

// fábrica de carrosséis para isolar o escopo de cada slider
const setupCarousel = (carouselId) => {
    const container = document.querySelector(carouselId);
    if (!container) return;

    const track = container.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextBtn = container.querySelector('.carousel__btn--next');
    const prevBtn = container.querySelector('.carousel__btn--prev');
    let currentIndex = 0;

    const update = () => {
        // recalcula largura do slide dinamicamente para garantir responsividade
        const width = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    nextBtn.addEventListener('click', () => {
        // loop infinito: se chegar no último, volta para o primeiro
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        update();
    });

    prevBtn.addEventListener('click', () => {
        // loop infinito reverso
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        update();
    });

    // garante o ajuste correto se o usuário redimensionar a janela
    window.addEventListener('resize', update);
};

// dados dos projetos com as descrições técnicas atualizadas
const projectsData = [
    {
        title: "PetMatch Mobile",
        description: "Native Android app featuring a Tinder-style swipe interface for pet adoption. Instead of geolocation, it uses a matching system that triggers automated emails via EmailJS to inform users about the adoption process status.",
        image: "./assets/project-petmatch.png",
        techs: ["Kotlin", "Android SDK", "Supabase", "EmailJS"],
        repoLink: "https://github.com/giovannicastrodev/pet-match",
        linkedinLink: "https://www.linkedin.com/posts/giovannicastromagalhaes_androiddev-kotlin-jetpackcompose-activity-7403609869473275904-wydY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKNKxEBpek0s7H8h9xlyhnwnyiyN5And8w"
    },
    {
        title: "FakeAnalyser AI",
        description: "An intelligent chatbot designed to combat misinformation. It utilizes the official Google Gemini SDK within a Node.js/Express backend to analyze text credibility and detect fake news patterns.",
        image: "./assets/project-chatbot.jpg",
        techs: ["React", "Node.js", "Express", "Gemini SDK"],
        repoLink: "https://github.com/giovannicastrodev/fnbook_aichatbot",
        linkedinLink: "https://www.linkedin.com/posts/giovannicastromagalhaes_you-know-when-you-revisit-old-code-and-see-activity-7402404372208484352-iWRy?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKNKxEBpek0s7H8h9xlyhnwnyiyN5And8w"
    },
    {
        title: "Rural Settlement ERP",
        description: "A desktop module focused on the management of rural settlements. It handles lot distribution, owner registration, and land control using Java Swing and MVC architecture.",
        image: "./assets/project-erp.png",
        techs: ["Java", "Swing", "MVC", "PostgreSQL"],
        repoLink: "https://github.com/giovannicastrodev/erp-assentamento-vendas",
        linkedinLink: null
    }
];

const projectTrack = document.querySelector('#project-carousel .carousel__track');

// renderização dinâmica dos cards de projeto
if (projectTrack) {
    projectTrack.innerHTML = projectsData.map(proj => {
        
        // gera as tags de tecnologia
        const techsHtml = proj.techs 
            ? proj.techs.map(t => `<span class="tech-tag">${t}</span>`).join('') 
            : '';

        // renderização condicional dos botões
        const githubBtn = proj.repoLink 
            ? `<a href="${proj.repoLink}" target="_blank" class="btn btn--small">GitHub</a>` 
            : '';

        const linkedinBtn = proj.linkedinLink 
            ? `<a href="${proj.linkedinLink}" target="_blank" class="btn btn--linkedin">
                 <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                 </svg>
                 Ver Post
               </a>` 
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

    // inicializa o carrossel apenas após o conteúdo ser injetado no dom
    setupCarousel('#project-carousel');
}

// inicializa o carrossel de experiência que já está no html
setupCarousel('#experience-carousel');

// atualiza o ano no rodapé automaticamente
document.getElementById('year').textContent = new Date().getFullYear();