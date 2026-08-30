# 🎨 Portfólio Criativo - Exercício Tipografia, Cores e Gradientes

## 📋 Descrição do Projeto

Este projeto é parte do **Encontro 9** do Curso de Desenvolvedor Web, focando na aplicação prática de **tipografia moderna**, **paletas de cores harmoniosas** e **gradientes sofisticados**.

## 🎯 Objetivos de Aprendizagem

- ✅ Implementar hierarquia tipográfica profissional usando Google Fonts
- ✅ Criar paleta de cores harmoniosa seguindo princípios de design
- ✅ Aplicar gradientes modernos para elementos visuais impactantes
- ✅ Desenvolver sistema de cores consistente com variáveis CSS
- ✅ Garantir acessibilidade e contraste adequado
- ✅ Criar design responsivo que funciona em todos os dispositivos

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização avançada
- **Google Fonts** - Tipografia web
- **CSS Variables** - Sistema de design consistente
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Gradients** - Efeitos visuais modernos

## 📁 Estrutura do Projeto

```
portfolio-criativo/
├── portfolio-base.html      # Estrutura HTML base
├── styles-base.css         # Estilos CSS base com TODOs
├── README.md              # Documentação do projeto
└── assets/               # Pasta para imagens (se necessário)
```

## 🎨 Paleta de Cores Sugerida

### Cores Primárias
- **Primary:** `#6366f1` (Índigo vibrante)
- **Primary Light:** `#a5b4fc` (Índigo claro)
- **Primary Dark:** `#4338ca` (Índigo escuro)

### Cores Secundárias
- **Secondary:** `#ec4899` (Rosa vibrante)
- **Secondary Light:** `#f9a8d4` (Rosa claro)
- **Secondary Dark:** `#be185d` (Rosa escuro)

### Cores Neutras
- **Gray 50:** `#f9fafb` (Quase branco)
- **Gray 100:** `#f3f4f6` (Cinza muito claro)
- **Gray 500:** `#6b7280` (Cinza médio)
- **Gray 900:** `#111827` (Quase preto)

## 🔤 Tipografia

### Fontes Selecionadas
- **Títulos:** `Playfair Display` (Serif elegante)
- **Corpo:** `Inter` (Sans-serif moderna)

### Escala Tipográfica
- **H1:** 3rem (48px) - Título principal
- **H2:** 2.25rem (36px) - Títulos de seção
- **H3:** 1.875rem (30px) - Subtítulos
- **Body:** 1rem (16px) - Texto base
- **Small:** 0.875rem (14px) - Texto secundário

## 🌈 Gradientes Implementados

### Gradiente Principal (Hero)
```css
background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
```

### Gradiente de Botões
```css
background: linear-gradient(135deg, #6366f1 0%, #4338ca 100%);
```

### Gradiente Radial (Decorativo)
```css
background: radial-gradient(circle, #6366f1 0%, transparent 70%);
```

## 📱 Responsividade

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Tipografia Responsiva
Utilização da função `clamp()` para tipografia fluida:
```css
h1 { font-size: clamp(2rem, 5vw, 4rem); }
```

## ♿ Acessibilidade

### Contraste
- **Texto normal:** Mínimo 4.5:1
- **Texto grande:** Mínimo 3:1
- **Elementos interativos:** Contraste adequado em todos os estados

### Boas Práticas
- Hierarquia semântica correta (H1, H2, H3...)
- Labels apropriados para formulários
- Foco visível em elementos interativos
- Texto alternativo para imagens decorativas

## 🚀 Como Executar

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o arquivo `portfolio-base.html` em seu navegador
3. **Complete** os TODOs no arquivo `styles-base.css`
4. **Teste** a responsividade em diferentes dispositivos
5. **Valide** o HTML e CSS

## ✅ Checklist de Implementação

### Tipografia
- [ ] Adicionar Google Fonts no HTML
- [ ] Configurar variáveis tipográficas
- [ ] Aplicar hierarquia aos elementos HTML
- [ ] Implementar tipografia responsiva com clamp()
- [ ] Configurar line-height adequado

### Cores
- [ ] Definir paleta completa com variáveis CSS
- [ ] Aplicar regra 60-30-10
- [ ] Verificar contraste para acessibilidade
- [ ] Implementar cores semânticas
- [ ] Testar em diferentes contextos

### Gradientes
- [ ] Criar gradiente para hero section
- [ ] Implementar gradientes em botões
- [ ] Adicionar gradiente radial decorativo
- [ ] Criar overlays com gradientes
- [ ] Otimizar performance dos gradientes

### Layout
- [ ] Estruturar seções principais
- [ ] Implementar grid responsivo
- [ ] Adicionar animações e transições
- [ ] Testar em diferentes dispositivos
- [ ] Validar código HTML/CSS

## 📊 Critérios de Avaliação

- **Tipografia (25%)** - Hierarquia, legibilidade, implementação
- **Cores (25%)** - Harmonia, contraste, consistência
- **Gradientes (20%)** - Técnica, criatividade, integração
- **Responsividade (15%)** - Adaptação, usabilidade
- **Código (10%)** - Organização, boas práticas
- **Criatividade (5%)** - Originalidade, detalhes

## 🎓 Aprendizados Esperados

Ao completar este exercício, você terá:

1. **Dominado** a implementação de tipografia web profissional
2. **Compreendido** princípios de harmonia cromática
3. **Aplicado** gradientes CSS de forma criativa e técnica
4. **Desenvolvido** sistema de design consistente
5. **Garantido** acessibilidade e usabilidade
6. **Criado** um portfólio que pode ser usado profissionalmente

## 🔗 Recursos Adicionais

### Ferramentas Recomendadas
- [Google Fonts](https://fonts.google.com/) - Biblioteca de fontes
- [Coolors.co](https://coolors.co/) - Gerador de paletas
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verificação de contraste
- [CSS Gradient Generator](https://cssgradient.io/) - Gerador de gradientes

### Documentação
- [MDN CSS Fonts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts)
- [MDN CSS Colors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Colors)
- [MDN CSS Gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients)

---

**💡 Dica Final:** Lembre-se que bom design é sobre comunicação eficaz. Priorize sempre a experiência do usuário e a acessibilidade!

**🎯 Meta:** Criar um portfólio que não apenas demonstre suas habilidades técnicas, mas também sua sensibilidade estética e atenção aos detalhes.

---

*Desenvolvido para o Encontro 9 - Curso de Desenvolvedor Web*
*Tipografia, Cores e Gradientes*

