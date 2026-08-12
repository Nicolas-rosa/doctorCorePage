import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingContactButton } from './components/FloatingContactButton';
import { siteContent } from './data/siteContent';
import { AboutPage, ContactPage, ContentPage, FAQPage, HomePage, ItemsPage, PostPage, PrivacyPage } from './pages';

function route(pathname, content) {
  const basePath = content.pathPrefix ? `/${content.pathPrefix}` : '';
  const makePath = (page) => (page ? `${basePath}/${page}` : basePath || '/');
  const contentBase = makePath(content.pathPages.content);

  // Se a URL corresponder a um post individual, renderiza a página do post
  // utilizando o último segmento da URL como slug.
  if (pathname.startsWith(`${contentBase}/`)) {
    return <PostPage content={content} slug={pathname.split('/').pop()} />;
  }

  // Mapeia cada rota da aplicação para o componente responsável pela renderização.
  const pages = {
    '/': HomePage,
    [contentBase]: ContentPage,
    [makePath(content.pathPages.about)]: AboutPage,
    [makePath(content.pathPages.items)]: ItemsPage,
    [makePath(content.pathPages.contact)]: ContactPage,
    [makePath(content.pathPages.faq)]: FAQPage,
    [makePath(content.pathPages.privacy)]: PrivacyPage,
  };

  // Caso a rota não exista, exibe a página inicial como fallback.
  const Page = pages[pathname] || HomePage;

  return <Page content={content} />;
}

export default function App() {
  const [language, setLanguage] = useState('pt');
  const [theme, setTheme] = useState('light');

  // Ao iniciar a aplicação, recupera o tema salvo no navegador.
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('profileTheme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  // Sempre que o tema mudar, atualiza o atributo do HTML e salva a preferência.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('profileTheme', theme);
  }, [theme]);

  const content = siteContent[language];
  const basePath = content.pathPrefix ? `/${content.pathPrefix}` : '';
  const makePath = (page) => (page ? `${basePath}/${page}` : basePath || '/');

  // Alterna entre os temas claro e escuro.
  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));

  // Alterna o idioma entre português e inglês.
  const toggleLanguage = () => setLanguage((current) => (current === 'pt' ? 'en' : 'pt'));

  return (
    <>
      <Header
        identity={content.identity}
        navigation={content.navigation}
        labels={content.labels}
        action={{ label: content.labels.contact, href: makePath(content.pathPages.contact) }}
        theme={theme}
        language={language}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
      />

      {/* Renderiza dinamicamente a página correspondente à URL atual. */}
      <main>{route(window.location.pathname, content)}</main>

      <Footer
        identity={content.identity}
        navigation={content.navigation}
        legalLabel={content.labels.privacy}
        legalHref={makePath(content.pathPages.privacy)}
        copyright={content.labels.copyright}
      />

      {/* Botão flutuante de acesso rápido à página de contato. */}
      <FloatingContactButton
        action={{ label: content.labels.contact, href: makePath(content.pathPages.contact) }}
        label={content.labels.contact}
      />
    </>
  );
}
