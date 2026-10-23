export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}
