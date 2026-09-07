# TechPhone Pro — Exercício Encontro 10 (Transições e Animações CSS)

Este projeto implementa a página de produto com **transições, animações e micro‑interações** conforme as instruções do exercício.

## Estrutura
```
produto-animado/
├─ index.html
├─ styles.css
├─ script.js
└─ images/
   ├─ produto.jpg
   ├─ feature-1.jpg
   ├─ feature-2.jpg
   └─ feature-3.jpg
```

## O que foi implementado
- **Animações de entrada**: header (slideInDown), hero (fadeInUp, slideInLeft/Right), títulos/seções via IntersectionObserver
- **Transições em botões/links**: hover, active, ripple, underline animado no menu
- **Cards animados**: elevação + zoom em imagem + overlay com ícone (bounce)
- **Loading spinner** e **notificações** de sucesso
- **Indicador de scroll** e **Back-to-top** com visibilidade animada
- **Micro‑interações no formulário**: focus com borda, sombra e linha ativa
- **Performance**: uso de `transform`/`opacity`, `loading="lazy"` nas imagens e `IntersectionObserver`
- **Acessibilidade**: `prefers-reduced-motion` respeitado e foco visível ao usar teclado

## Como executar
Abra `index.html` no navegador. Edite `styles.css` para experimentar com tempos/easings.

Boa prática: testar em janela estreita (≤768px) para conferir responsividade.
