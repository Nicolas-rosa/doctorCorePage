# 🏥 Healthcare Landing Page Template

> Um template React moderno e totalmente modular para criação de **landing pages voltadas à área da saúde**, desenvolvido para clínicas, consultórios e profissionais da saúde que desejam uma presença digital profissional, responsiva e de fácil personalização.

Este projeto utiliza uma arquitetura baseada em componentes reutilizáveis e um sistema centralizado de conteúdo, permitindo adaptar toda a landing page sem modificar a estrutura da aplicação.

> **⚠️ Status do projeto:** Em desenvolvimento.
>
> Durante a evolução do projeto serão adicionados novos componentes, melhorias na arquitetura e um sistema completo de **Design Tokens**, tornando toda a interface ainda mais personalizável.

---

# ✨ Funcionalidades

## 🏗 Arquitetura

* Componentes reutilizáveis
* Estrutura modular
* Separação entre conteúdo e interface
* Fácil manutenção
* Código escalável

## 🎨 Personalização

* Conteúdo centralizado
* Design Tokens
* Componentes configuráveis via Props
* Estrutura preparada para múltiplos idiomas
* Rotas configuráveis

## 📱 Experiência do Usuário

* Mobile First
* Layout responsivo
* Navegação intuitiva
* HTML semântico
* Compatível com WCAG AA

## ⚡ Desenvolvimento

* React + Vite
* CSS puro
* Build otimizado
* Fácil adaptação para diferentes especialidades

---

# 👨‍⚕️ Ideal para

Este template pode ser utilizado por:

* Médicos
* Psicólogos
* Nutricionistas
* Dentistas
* Fisioterapeutas
* Fonoaudiólogos
* Terapeutas ocupacionais
* Clínicas multidisciplinares
* Clínicas de estética
* Centros de bem-estar
* Profissionais da saúde em geral

---

# 📑 Índice

* Funcionalidades
* Tecnologias
* Instalação
* Estrutura
* Fluxo da Aplicação
* Personalização
* Componentes
* Design Tokens
* Páginas
* Acessibilidade
* Roadmap
* Licença

---

# 🚀 Instalação

## Pré-requisitos

* Node.js 18+
* npm ou pnpm

## Clonar o projeto

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git

cd seu-repositorio
```

## Instalar dependências

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## Build para Produção

```bash
npm run build
```

Os arquivos finais serão gerados em:

```
dist/
```

---

## Preview

```bash
npm run preview
```

---

# 🛠 Tecnologias

* React
* Vite
* JavaScript
* CSS3
* Design Tokens

---

# 📁 Estrutura do Projeto

```text
src
│
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
│
├── data/
│   └── siteContent.js
│
├── pages/
│
├── tokens/
│   └── tokens.css
│
├── App.jsx
├── main.jsx
└── styles.css
```

---

# 🔄 Fluxo da Aplicação

Todo o conteúdo do template é controlado por um único arquivo.

```text
siteContent.js
        │
        ▼
      App.jsx
        │
        ▼
      Pages
        │
        ▼
   Components
        │
        ▼
 Landing Page
```

Isso permite alterar praticamente todo o site sem editar os componentes.

---

# 🎨 Personalização

## Conteúdo

Todo o conteúdo da landing page fica em:

```
src/data/siteContent.js
```

É possível alterar:

* Nome do profissional
* Especialidades
* Serviços
* Imagens
* Botões
* Informações de contato
* FAQ
* Depoimentos
* Redes sociais
* Chamadas para ação
* Textos da página

---

## Aparência

Todos os estilos globais ficam em:

```
src/tokens/tokens.css
```

Você pode personalizar:

* Paleta de cores
* Tipografia
* Espaçamentos
* Bordas
* Sombras
* Larguras máximas
* Raios dos componentes

---

## Exemplo de Conteúdo

```javascript
export const siteContent = {
    identity: {
        name: "Dra. Ana Silva",
        monogram: "AS",
        description: "Clínica especializada em saúde integrada."
    },

    hero: {
        eyebrow: "Saúde e Bem-estar",
        title: "Cuidando da sua saúde com atendimento humanizado",
        description:
            "Consultas personalizadas para oferecer o melhor tratamento para você.",

        primaryAction: {
            label: "Agendar Consulta",
            href: "#contact"
        }
    }
};
```

---

# 🎨 Design Tokens

Todos os tokens ficam centralizados em:

```
src/tokens/tokens.css
```

Exemplo:

```css
:root{

    --color-bg:#F7F7F7;

    --color-accent:#2B7A78;

    --color-accent-hover:#20504F;

    --font-heading:"Fraunces", serif;

    --font-body:"DM Sans", sans-serif;

}
```

Alterando apenas esses valores toda a interface será atualizada automaticamente.

---

# 🧩 Componentes

O template possui componentes independentes e reutilizáveis.

## Hero

Apresentação principal da landing page.

* título
* descrição
* imagem
* CTA principal

---

## AboutBlock

Apresentação do profissional ou clínica.

---

## ItemCards

Serviços, especialidades ou tratamentos.

---

## Highlights

Diferenciais da clínica.

---

## Testimonials

Depoimentos de pacientes.

---

## FAQAccordion

Perguntas frequentes.

---

## ContactForm

Formulário de contato.

---

## CTABanner

Chamada final para conversão.

---

## FloatingContactButton

Botão flutuante para WhatsApp, telefone ou outro canal de atendimento.

Todos os componentes são totalmente configuráveis via Props.

---

# 📄 Estrutura da Landing Page

A página principal foi organizada para apresentar todas as informações necessárias para uma landing page profissional.

1. Hero
2. Sobre
3. Especialidades
4. Diferenciais
5. Depoimentos
6. Conteúdo
7. FAQ
8. CTA
9. Contato
10. Rodapé

---

# ♿ Acessibilidade

O projeto segue boas práticas de acessibilidade.

Inclui:

* Contraste WCAG AA
* HTML semântico
* Navegação por teclado
* Focus visível
* Alt obrigatório para imagens
* Estrutura compatível com leitores de tela

Para manter a acessibilidade:

* utilize texto alternativo em imagens;
* mantenha contraste mínimo de 4.5:1;
* não remova indicadores de foco;
* preserve a hierarquia correta de títulos.

---

# 🚧 Roadmap

## Concluído

* Estrutura inicial
* Landing Page responsiva
* Componentes reutilizáveis
* Conteúdo centralizado
* Responsividade
* HTML semântico

## Em desenvolvimento

* Design Tokens completos
* Mais componentes
* Novas seções
* Melhorias de acessibilidade
* Sistema de temas
* Internacionalização
* Storybook
* Testes automatizados
* Componentes mais configuráveis

---

# 📌 Observações

* Este projeto é exclusivamente **Front-end**.
* O formulário de contato não possui integração com backend.
* As imagens utilizadas devem ser substituídas pelas do projeto final.
* Recomenda-se integrar o formulário a um serviço como Formspree, EmailJS ou backend próprio.

---

# 🤝 Contribuição

Contribuições são bem-vindas.

Caso encontre algum problema ou tenha sugestões de melhorias, abra uma **Issue** ou envie um **Pull Request**.

---

# 📄 Licença

Este projeto está disponível sob a licença **MIT**.

Você pode utilizá-lo, modificá-lo e adaptá-lo para projetos pessoais ou comerciais, respeitando os termos da licença.
