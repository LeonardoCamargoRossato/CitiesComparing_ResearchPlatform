import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function FeatureCard({ icon: Icon, title, description, to }) {
  return (
    <article className="card feature-card">
      <div className="icon-wrap">{Icon && <Icon size={22} />}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      {to && <Link to={to} className="text-link">Explorar <ArrowRight size={16} /></Link>}
    </article>
  )
}
