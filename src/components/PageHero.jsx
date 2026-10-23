export default function PageHero({ eyebrow, title, description, badge, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__content">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {description && <p className="page-hero__description">{description}</p>}
          {badge}
        </div>
        {children && <div className="page-hero__aside">{children}</div>}
      </div>
    </section>
  )
}
