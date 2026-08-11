# 🏥 Template de Landing Page para Profissionais da Saúde

## Atenção ele esta em desenvolvimento e ao final do projeto apresentara componentes customizáveis através de Design tokens centralizados

Este projeto é um **template de landing page modular** pensado para profissionais da saúde, clínicas, consultórios e serviços de bem-estar. Ele reúne componentes prontos para apresentar serviços, depoimentos, diferenciais e canais de contato com visual moderno e foco em conversão.

---

## ✨ O que este template oferece

- ✅ **Landing page pronta** para profissionais da saúde
- ✅ **Componentes reutilizáveis** que podem ser combinados ou reorganizados
- ✅ **Conteúdo editável** em `src/data/siteContent.js`
- ✅ **Design tokens centralizados** em `src/tokens/tokens.css`
- ✅ **Responsividade mobile-first** para celular, tablet e desktop
- ✅ **Acessibilidade básica** com foco em texto alternativo e controle de foco
- ✅ **Seções ideais para saúde**: serviços, sobre, depoimentos, FAQ, contato e CTA

---

## 🚀 Como usar

### Pré-requisitos
- Node.js 16+ instalado
- npm (ou pnpm)

### Instalação

```bash
npm install
```

### Iniciar em modo de desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:5173` no navegador.

### Build para produção

```bash
npm run build
```

### Visualizar o build

```bash
npm run preview
```

---

## 📁 Estrutura do projeto

```
src/
├── App.jsx
├── main.jsx
├── pages.jsx
├── styles.css
├── components/
│   ├── AboutBlock.jsx
│   ├── Button.jsx
│   ├── ContactForm.jsx
│   ├── ContentCard.jsx
│   ├── CTABanner.jsx
│   ├── FAQAccordion.jsx
│   ├── FloatingContactButton.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Highlights.jsx
│   ├── ItemCards.jsx
│   └── Testimonials.jsx
├── data/
│   └── siteContent.js
└── tokens/
    └── tokens.css
```

---

## 🧩 Componentes principais

- `Hero` — seção inicial com título, descrição e botão principal
- `AboutBlock` — apresenta o profissional ou a clínica
- `ItemCards` — mostra serviços, especialidades ou tratamentos
- `Highlights` — exibe diferenciais e resultados
- `Testimonials` — depoimentos de pacientes ou clientes
- `FAQAccordion` — perguntas frequentes para dúvidas comuns
- `ContactForm` — formulário de contato
- `CTABanner` — chamada final para ação
- `FloatingContactButton` — botão fixo para contato rápido

---

## 📝 Personalize o conteúdo

Todo o texto, títulos, descrições e links estão em `src/data/siteContent.js`.

### Exemplo de edição

```js
export const siteContent = {
  identity: {
    name: 'Dra. Ana Silva',
    monogram: 'AS',
    description: 'Clínica de saúde integrada para tratamentos humanizados',
  },
  hero: {
    eyebrow: 'Saúde e bem-estar',
    title: 'Cuidados personalizados para você',
    description: 'Atendimento especializado em nutrição, fisioterapia e terapia ocupacional.',
    primaryAction: { label: 'Agendar consulta', href: '#contact' },
  },
  items: [
    { icon: '01', title: 'Consulta presencial', description: 'Avaliação completa e plano de tratamento.' },
    { icon: '02', title: 'Acompanhamento online', description: 'Suporte contínuo com atendimento remoto.' },
  ],
  testimonials: [
    { name: 'Carlos', role: 'Paciente', quote: 'Atendimento humanizado e resultados visíveis.' },
  ],
};
```

---

## 🎨 Personalização visual

A configuração de cores, tipografia e espaçamento fica em `src/tokens/tokens.css`.

### Alterar paleta de cores

```css
:root {
  --color-accent: #2b7a78;
  --color-accent-hover: #20504f;
  --color-bg: #f4f2ee;
}
```

---

## 💡 Ideal para

- médicos, psicólogos, nutricionistas, fisioterapeutas
- clínicas de estética e bem-estar
- consultórios multidisciplinares
- profissionais que precisam de uma apresentação clara e elegante

---

## 📌 Como adaptar

- Atualize `siteContent.js` com o nome, especialidades e serviços
- Troque imagens e ícones conforme a identidade visual do seu atendimento
- Ajuste os textos das seções de depoimentos e FAQ para suas perguntas reais
- Use o `FloatingContactButton` para facilitar contato via WhatsApp ou chat

---

## 🚧 Observações

- O projeto não inclui backend para envio de formulário
- É um template front-end que serve de base para landing pages de saúde
- Para publicação, inclua suas próprias informações de contato e dados de privacidade


### FAQAccordion
```jsx
<FAQAccordion items={content.faq} />
```

Todos os componentes são **100% configuráveis via props** — nenhum valor hardcoded.

---

## 📄 Páginas Implementadas

| Página | Rota | Descrição |
|---|---|---|
| Home | `/` | Apresentação completa, com Hero, Sobre, Itens, Destaques, Depoimentos, Conteúdo e CTA |
| Sobre | `/sobre` | Apresentação expandida com trajetória e destaques |
| Itens | `/itens` | Catálogo completo de serviços/possibilidades |
| Conteúdo | `/conteudo` | Grid de posts/artigos com filtro por categoria |
| Post | `/conteudo/[slug]` | Artigo individual com related content |
| Contato | `/contato` | Formulário de contato com informações diretas |
| FAQ | `/faq` | Perguntas frequentes dedicadas |
| Privacidade | `/privacidade` | Política de privacidade |

---


## 🔧 Tecnologia

- **React 18** — Framework UI
- **Vite** — Build tool rápida e moderna
- **CSS 3** — Estilos nativos (sem pré-processadores)
- **Design Tokens** — Sistema de design centralizado

---

## ♿ Acessibilidade

O template foi construído com acessibilidade em mente:

- ✅ Contraste WCAG AA mínimo em todos os textos
- ✅ Foco visível em interativos (`outline-offset: 4px`)
- ✅ Alt text obrigatório em imagens
- ✅ Semântica HTML apropriada (header, nav, main, article, footer)
- ✅ Navegação por teclado completa
- ✅ Aria labels onde necessário

Para manter acessibilidade:
- Sempre forneça `alt` em imagens
- Mantenha contraste min. 4.5:1 para texto pequeno
- Não remova focus indicators

---


