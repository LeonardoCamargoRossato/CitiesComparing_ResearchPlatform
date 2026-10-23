import { ArrowUpRight } from 'lucide-react'
import StatusBadge from './StatusBadge'

export default function ToolCard({ icon: Icon, title, description, onOpen }) {
  return (
    <article className="card compact-card">
      <div className="card-row">
        <div className="icon-wrap">{Icon && <Icon size={20} />}</div>
        <StatusBadge>Planejado</StatusBadge>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button button--small button--primary" onClick={onOpen}>Abrir Ferramenta <ArrowUpRight size={15} /></button>
    </article>
  )
}
