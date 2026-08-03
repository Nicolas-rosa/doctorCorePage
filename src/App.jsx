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

  if (pathname.startsWith(`${contentBase}/`)) return <PostPage content={content} slug={pathname.split('/').pop()} />;
  const pages = {
    '/': HomePage,
    [contentBase]: ContentPage,
    [makePath(content.pathPages.about)]: AboutPage,
    [makePath(content.pathPages.items)]: ItemsPage,
    [makePath(content.pathPages.contact)]: ContactPage,
    [makePath(content.pathPages.faq)]: FAQPage,
    [makePath(content.pathPages.privacy)]: PrivacyPage,
  };
  const Page = pages[pathname] || HomePage;
  return <Page content={content} />;
}

export default function App() {
  const [language, setLanguage] = useState('pt');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('profileTheme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('profileTheme', theme);
  }, [theme]);

  const content = siteContent[language];
  const basePath = content.pathPrefix ? `/${content.pathPrefix}` : '';
  const makePath = (page) => (page ? `${basePath}/${page}` : basePath || '/');

  const toggleTheme = () => setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
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
      <main>{route(window.location.pathname, content)}</main>
      <Footer
        identity={content.identity}
        navigation={content.navigation}
        legalLabel={content.labels.privacy}
        legalHref={makePath(content.pathPages.privacy)}
        copyright={content.labels.copyright}
      />
      <FloatingContactButton action={{ label: content.labels.contact, href: makePath(content.pathPages.contact) }} label={content.labels.contact} />
    </>
  );
}
