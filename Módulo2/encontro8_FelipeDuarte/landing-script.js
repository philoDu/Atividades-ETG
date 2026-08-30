// ===================================
// NAVEGAÇÃO MOBILE
// ===================================

// Elementos do DOM
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');

// TODO: Implementar funcionalidade do menu hambúrguer
function toggleMobileMenu() {
    // Adicionar/remover classe 'active' no menu
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Prevenir scroll do body quando menu estiver aberto
    document.body.classList.toggle('menu-open');
}

// Event listener para o botão do menu
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

// Fechar menu ao clicar em um link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Fechar menu ao clicar fora dele
document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// ===================================
// SCROLL SUAVE PARA LINKS INTERNOS
// ===================================

// TODO: Implementar scroll suave personalizado (opcional)
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Aplicar scroll suave a todos os links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        smoothScrollTo(target);
    });
});

// ===================================
// FORMULÁRIO DE CONTATO
// ===================================

const contactForm = document.querySelector('.contact-form form');

// TODO: Implementar validação e envio do formulário
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Validação básica
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }
        
        // Simular envio (em um projeto real, aqui seria feita a requisição para o servidor)
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular delay de envio
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

// ===================================
// ANIMAÇÕES DE ELEMENTOS NA VIEWPORT
// ===================================

// Usa IntersectionObserver para revelar elementos assim que entram na tela,
// sem exigir que fiquem 100% visíveis (mais confiável que checar getBoundingClientRect no scroll)
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .stat-item, .info-item');

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        animatedElements.forEach(element => element.classList.add('animate-in'));
        return;
    }

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(element => revealObserver.observe(element));
}

// ===================================
// HEADER FIXO COM EFEITO DE SCROLL
// ===================================

const header = document.querySelector('.header');
let lastScrollTop = 0;

// TODO: Implementar efeito de header que aparece/desaparece no scroll
function handleHeaderScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - esconder header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up - mostrar header
        header.style.transform = 'translateY(0)';
    }
    
    // Adicionar classe quando não estiver no topo
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
}

window.addEventListener('scroll', handleHeaderScroll);

// ===================================
// RESPONSIVIDADE JAVASCRIPT
// ===================================

// TODO: Implementar ajustes JavaScript baseados no tamanho da tela
function handleResize() {
    const width = window.innerWidth;
    
    // Fechar menu mobile se a tela ficar grande
    if (width >= 769) {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    // Ajustar altura do hero baseada na viewport
    const hero = document.querySelector('.hero');
    if (hero && width <= 768) {
        hero.style.minHeight = '100vh';
    } else if (hero) {
        hero.style.minHeight = 'auto';
    }
}

window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// ===================================
// LAZY LOADING DE IMAGENS
// ===================================

// As imagens de serviço usam o atributo nativo loading="lazy". Aqui apenas
// aplicamos um fade-in suave assim que cada imagem lazy termina de carregar.
function initLazyImageFade() {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add('img-loaded');
        } else {
            img.addEventListener('load', () => img.classList.add('img-loaded'));
        }
    });
}

document.addEventListener('DOMContentLoaded', initLazyImageFade);

// ===================================
// UTILITÁRIOS
// ===================================

// Função para detectar dispositivo touch
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

// Adicionar classe para dispositivos touch
if (isTouchDevice()) {
    document.body.classList.add('touch-device');
}

// Função para debounce (otimizar performance de eventos)
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce aos eventos de scroll e resize
const debouncedScrollHandler = debounce(handleHeaderScroll, 10);
const debouncedResizeHandler = debounce(handleResize, 250);

window.removeEventListener('scroll', handleHeaderScroll);
window.removeEventListener('resize', handleResize);
window.addEventListener('scroll', debouncedScrollHandler);
window.addEventListener('resize', debouncedResizeHandler);

// ===================================
// INICIALIZAÇÃO
// ===================================

// Função de inicialização
function init() {
    console.log('TechSolutions Landing Page carregada com sucesso!');
    
    // Executar funções de inicialização
    handleResize();
    initScrollAnimations();

    // Adicionar classe de carregamento completo
    document.body.classList.add('loaded');
}

// Executar quando o DOM estiver completamente carregado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

