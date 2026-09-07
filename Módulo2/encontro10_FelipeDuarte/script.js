// ===== CONFIGURAÇÕES INICIAIS =====
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initLoadingScreen();
    initScrollProgress();
    initBackToTop();
    initFormHandling();
    initButtonAnimations();
    
    console.log('TechPhone Pro - Página carregada com sucesso!');
});

// ===== LOADING SCREEN =====
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Simular carregamento por 2 segundos
    setTimeout(() => {
        if (loadingScreen) {
            // TODO: Adicionar animação de fade out
            loadingScreen.style.opacity = '0';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
}

// ===== SCROLL PROGRESS INDICATOR =====
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    if (progressBar) {
        window.addEventListener('scroll', () => {
            // Calcular progresso do scroll
            const scrollTop = window.pageYOffset;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            // TODO: Atualizar largura da barra de progresso
            progressBar.style.width = scrollPercent + '%';
        });
    }
}

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Mostrar/esconder botão baseado no scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                // TODO: Adicionar classe 'visible' com animação
                backToTopBtn.classList.add('visible');
            } else {
                // TODO: Remover classe 'visible'
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll suave para o topo
        backToTopBtn.addEventListener('click', () => {
            // TODO: Implementar scroll suave para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== FORM HANDLING =====
function initFormHandling() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Adicionar efeitos de focus nos inputs
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // TODO: Adicionar eventos de focus e blur para animações
            input.addEventListener('focus', handleInputFocus);
            input.addEventListener('blur', handleInputBlur);
        });
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const submitBtn = e.target.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // TODO: Mostrar loading no botão
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    submitBtn.disabled = true;
    
    // Simular envio do formulário
    setTimeout(() => {
        // TODO: Restaurar estado original do botão
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        // TODO: Mostrar mensagem de sucesso
        showSuccessMessage('Mensagem enviada com sucesso!');
        
        // Limpar formulário
        e.target.reset();
    }, 2000);
}

function handleInputFocus(e) {
    // TODO: Adicionar classe de focus para animações
    const formGroup = e.target.closest('.form-group');
    if (formGroup) {
        formGroup.classList.add('focused');
    }
}

function handleInputBlur(e) {
    // TODO: Remover classe de focus se input estiver vazio
    const formGroup = e.target.closest('.form-group');
    if (formGroup && !e.target.value) {
        formGroup.classList.remove('focused');
    }
}

// ===== BUTTON ANIMATIONS =====
function initButtonAnimations() {
    const buyBtn = document.getElementById('buy-btn');
    
    if (buyBtn) {
        buyBtn.addEventListener('click', handleBuyButtonClick);
    }
    
    // Adicionar efeitos ripple em todos os botões
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', createRippleEffect);
    });
}

function handleBuyButtonClick(e) {
    const btn = e.currentTarget;
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');
    
    // TODO: Mostrar loading
    btnText.style.display = 'none';
    btnLoading.style.display = 'block';
    btn.disabled = true;
    
    // Simular processo de compra
    setTimeout(() => {
        // TODO: Restaurar botão
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
        btn.disabled = false;
        
        // TODO: Mostrar mensagem de sucesso
        showSuccessMessage('Produto adicionado ao carrinho!');
    }, 3000);
}

function createRippleEffect(e) {
    // TODO: Implementar efeito ripple nos botões
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('span');
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    btn.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// ===== INTERSECTION OBSERVER PARA ANIMAÇÕES =====
function initScrollAnimations() {
    // TODO: Implementar Intersection Observer para animar elementos ao entrar na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // TODO: Adicionar classe de animação
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que devem ser animados
    const animatedElements = document.querySelectorAll(
        '.feature-card, .spec-category, .section-title, .section-subtitle'
    );
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== SMOOTH SCROLLING PARA LINKS DE NAVEGAÇÃO =====
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // TODO: Implementar scroll suave com offset para header fixo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== PARALLAX EFFECT =====
function initParallaxEffect() {
    // TODO: Implementar efeito parallax nos elementos flutuantes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icon');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== UTILITY FUNCTIONS =====
function showSuccessMessage(message) {
    // TODO: Criar e mostrar notificação de sucesso
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #28a745, #20c997);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function debounce(func, wait) {
    // TODO: Implementar função debounce para otimizar performance
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

// ===== PERFORMANCE OPTIMIZATIONS =====
// TODO: Implementar lazy loading para imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== ACCESSIBILITY IMPROVEMENTS =====
function initAccessibility() {
    // TODO: Implementar melhorias de acessibilidade
    
    // Respeitar preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    if (prefersReducedMotion.matches) {
        document.body.classList.add('reduce-motion');
    }
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

// ===== CSS ANIMATIONS VIA JAVASCRIPT =====
// TODO: Adicionar keyframes dinamicamente se necessário
function addCustomKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes slideInUp {
            from {
                transform: translateY(50px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        .reduce-motion * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        
        .keyboard-navigation *:focus {
            outline: 2px solid #667eea !important;
            outline-offset: 2px !important;
        }
    `;
    document.head.appendChild(style);
}

// Inicializar funcionalidades adicionais quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScrolling();
    initParallaxEffect();
    initLazyLoading();
    initAccessibility();
    addCustomKeyframes();
});

