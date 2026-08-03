import { AboutBlock } from './components/AboutBlock';
import { ContactForm } from './components/ContactForm';
import { ContentCard } from './components/ContentCard';
import { CTABanner } from './components/CTABanner';
import { FAQAccordion } from './components/FAQAccordion';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { ItemCards } from './components/ItemCards';
import { Testimonials } from './components/Testimonials';

export function HomePage({ content }) {
  return (
    <>
      <Hero {...content.hero} />
      <AboutBlock {...content.about} />
      <ItemCards
        eyebrow={content.pages.home.items.eyebrow}
        title={content.pages.home.items.title}
        description={content.pages.home.items.description}
        items={content.items}
      />
      <Highlights eyebrow={content.pages.home.highlights.eyebrow} title={content.pages.home.highlights.title} items={content.milestones} />
      <Testimonials eyebrow={content.pages.home.testimonials.eyebrow} title={content.pages.home.testimonials.title} items={content.testimonials} />
      <ContentPreview items={content.content} label={content.labels.allContent} content={content} />
      <CTABanner {...content.cta} />
    </>
  );
}

export function AboutPage({ content }) {
  return (
    <>
      <Hero eyebrow={content.pages.about.hero.eyebrow} title={content.pages.about.hero.title} description={content.pages.about.hero.description} compact />
      <AboutBlock {...content.about} imagePosition="left" />
      <Highlights eyebrow={content.pages.about.highlights.eyebrow} title={content.pages.about.highlights.title} items={content.milestones} />
      <CTABanner {...content.cta} />
    </>
  );
}

export function ItemsPage({ content }) {
  const audience = content.items.map((item, index) => ({ ...item, icon: `0${index + 1}`, title: `${content.pages.items.audience.prefix} ${item.title.toLowerCase()}` }));
  return (
    <>
      <Hero eyebrow={content.pages.items.hero.eyebrow} title={content.pages.items.hero.title} description={content.pages.items.hero.description} compact />
      <ItemCards eyebrow={content.pages.items.offered.eyebrow} title={content.pages.items.offered.title} items={content.items} columns={3} />
      <ItemCards eyebrow={content.pages.items.audience.eyebrow} title={content.pages.items.audience.title} description={content.pages.items.audience.description} items={audience} columns={3} />
      <FAQSection items={content.faq} content={content} />
      <CTABanner {...content.cta} />
    </>
  );
}

export function ContentPage({ content }) {
  return (
    <>
      <Hero eyebrow={content.pages.content.hero.eyebrow} title={content.pages.content.hero.title} description={content.pages.content.hero.description} compact />
      <section className="section">
        <div className="container">
          <div className="content-toolbar">
            <p>{content.content.length} {content.pages.content.count}</p>
            <label>
              {content.pages.content.filter}
              <select aria-label={content.pages.content.filter}>
                <option>{content.pages.content.all}</option>
                {content.pages.content.categories.map((category) => <option key={category}>{category}</option>)}
              </select>
            </label>
          </div>
          <div className="content-grid">{content.content.map((item) => <ContentCard key={item.slug} item={item} />)}</div>
        </div>
      </section>
    </>
  );
}

export function PostPage({ content, slug }) {
  const item = content.content.find((entry) => entry.slug === slug) || content.content[0];
  return (
    <>
      <article className="post">
        <header className="container post__header">
          <p className="eyebrow">{item.category}</p>
          <h1>{item.title}</h1>
          <p className="post__meta"><time>{item.date}</time><span>{item.readTime}</span></p>
        </header>
        <div className="container post__cover"><img src={item.image.src} alt={item.image.alt} /></div>
        <div className="post__body">
          <p>{item.excerpt} {content.pages.post.body[0]}</p>
          <h2>{content.pages.post.heading}</h2>
          <p>{content.pages.post.body[1]}</p>
          <p>{content.pages.post.body[2]}</p>
        </div>
      </article>
      <ContentPreview items={content.content.filter((entry) => entry.slug !== item.slug).slice(0, 2)} label={content.labels.allContent} content={content} />
      <CTABanner {...content.cta} />
    </>
  );
}

export function ContactPage({ content }) {
  return (
    <>
      <Hero {...content.contact} compact />
      <section className="section">
        <div className="container contact-layout">
          <ContactForm labels={content.labels.form} confirmation={content.pages.contact.confirmation} />
          <aside className="contact-details">
            {content.contact.channels.map((channel) => (
              <div key={channel.label}>
                <p className="eyebrow">{channel.label}</p>
                <p>{channel.value}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  );
}

export function FAQPage({ content }) {
  return (
    <>
      <Hero eyebrow={content.pages.faq.hero.eyebrow} title={content.pages.faq.hero.title} description={content.pages.faq.hero.description} compact />
      <FAQSection items={content.faq} content={content} />
      <CTABanner {...content.cta} />
    </>
  );
}

export function PrivacyPage({ content }) {
  return (
    <section className="section legal">
      <div className="container">
        <p className="eyebrow">{content.pages.privacy.eyebrow}</p>
        <h1>{content.legal.title}</h1>
        {content.legal.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  );
}

function FAQSection({ items, content }) {
  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">{content.pages.faq.section.eyebrow}</p>
          <h2>{content.pages.faq.section.title}</h2>
        </div>
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}

function ContentPreview({ items, label, content }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">{content.pages.home.content.eyebrow}</p>
            <h2>{content.pages.home.content.title}</h2>
          </div>
          <a className="button button--text" href={`/${content.pathPrefix}/${content.pathPages.content}`}>{label}</a>
        </div>
        <div className="content-grid">{items.map((item) => <ContentCard key={item.slug} item={item} />)}</div>
      </div>
    </section>
  );
}
