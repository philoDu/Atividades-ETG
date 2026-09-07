Transições e animações CSS

Objetivo do Exercício
Criar uma página de apresentação de produto com transições e animações CSS modernas, aplicando os conceitos aprendidos na apostila para desenvolver micro-interações profissionais que melhoram a experiência do usuário. Requisitos:

Página de produto com layout responsivo
Animações de entrada para elementos principais
Transições em botões com estados hover e active
Cards animados com efeitos de hover
Loading animation para simular carregamento
Micro-interações em formulários e elementos interativos
Performance otimizada usando transform e opacity

Instruções Gerais
Use os arquivos base fornecidos como ponto de partida. Eles estão contidos em arquivos-base.zip, disponível no fim desta página.
Siga os TODOs comentados no código para implementar as animações
Teste as animações em diferentes navegadores
Mantenha performance em mente - use transform e opacit


Passo a Passo

Passo 1: Configuração Inicial e Estrutura
Configure o ambiente de desenvolvimento e analise a estrutura base do projeto.

📁 Estrutura de Arquivos:
produto-animado/

├── index.html          # Página principal
├── styles.css          # Estilos e animações
├── script.js           # Interações JavaScript
├── README.md           # Documentação
└── images/             # Pasta de imagens
    ├── produto.jpg
    ├── feature-1.jpg
    ├── feature-2.jpg
    └── feature-3.jpg
            
Tarefas:
Baixe os arquivos base fornecidos
Abra o projeto no VS Code ou editor de sua preferência
Visualize a página no navegador (deve estar sem animações)
Analise os comentários TODO no código CSS

Passo 2: Implementar Animações de Entrada

Adicione animações de entrada para os elementos principais da página usando keyframes.

Elementos a Animar:
Header: Slide down com fade in
Hero Section: Fade in com scale up
Cards de Features: Slide up escalonado
Footer: Fade in com delay
Tarefas:
Implemente as animações de entrada nos TODOs marcados
Use delays diferentes para criar efeito escalonado
Teste a suavidade das animações
Ajuste duração e timing functions conforme necessário
Sugestão de código:

/* Exemplo de animação de entrada */
@keyframes slideInDown {
    from {
        transform: translateY(-100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

.header {
    animation: slideInDown 0.8s ease-out;
}
                     
Passo 3: Criar Transições em Botões e Links
Implemente transições suaves em todos os elementos interativos para melhorar a UX.

Elementos Interativos:
Adicione transições suaves em todos os botões
Implemente estados hover, focus e active
Crie efeito de underline animado nos links
Teste a responsividade das interações
Tarefas:
Adicione transições suaves em todos os botões
Implemente estados hover, focus e active
Crie efeito de underline animado nos links
Teste a responsividade das interações
Sugestão de código:

/* Exemplo de transição em botão */
.btn-primary {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-primary:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.btn-primary:active {
    transform: translateY(0) scale(0.98);
}

Passo 4: Animar Cards de Features
Crie efeitos de hover sofisticados nos cards de features do produto.

Efeitos nos Cards:
Hover Lift: Elevação com sombra
Image Zoom: Zoom sutil na imagem
Content Slide: Deslizamento do conteúdo
Border Animation: Borda animada
Tarefas:
Implemente efeito de elevação nos cards
Adicione zoom nas imagens durante hover
Crie animação de borda ou overlay
Teste a suavidade das transições
Sugestão de código:

/* Exemplo de card animado */
.feature-card {
    transition: all 0.4s ease;
    overflow: hidden;
}

.feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.feature-card:hover .card-image {
    transform: scale(1.1);
}

.feature-card .card-image {
    transition: transform 0.6s ease;
}

Passo 5: Adicionar Loading Animation e Micro-interações
Implemente uma animação de loading e micro-interações finais.

Micro-interações:
Loading Spinner: Animação de carregamento
Form Inputs: Focus e validação animados
Scroll Indicator: Barra de progresso
Pulse Animation: Elementos de destaque
Tarefas:
Adicione loading spinner no botão de compra
Implemente animações nos inputs do formulário
Crie indicador de scroll animado
Adicione pulse em elementos de destaque
Sugestão de código:

/* Exemplo de loading spinner */
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}

.loading-spinner {
    animation: spin 1s linear infinite;
}

/* Exemplo de pulse */
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.pulse {
    animation: pulse 2s ease-in-out infinite;
}


Dicas Finais
Performance: Use transform e opacity para animações suaves
Acessibilidade: Respeite prefers-reduced-motion
Timing: Animações rápidas (200-500ms) para interações, lentas (800ms+) para entrada
Easing: Use ease-out para entrada, ease-in para saída
Teste: Sempre teste em dispositivos móveis

Desafios Extras (Opcional)
Para quem quiser se aprofundar no tema, tente implementar:

Parallax Effect: Adicione efeito parallax no background
Scroll Animations: Elementos que animam ao entrar na viewport
3D Transforms: Use rotateX, rotateY para efeitos 3D
SVG Animations: Anime ícones SVG com CSS
Dark Mode Toggle: Transição suave entre temas