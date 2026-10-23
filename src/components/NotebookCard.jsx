import { ExternalLink, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

export default function NotebookCard({ notebook }) {
  const Icon = notebook.icon
  return (
    <article className="card notebook-card">
      <div className="card-row">
        <div className="icon-wrap">{Icon && <Icon size={20} />}</div>
        <StatusBadge tone="accent">Código disponível</StatusBadge>
      </div>

      <div className="notebook-card__heading">
        <h3>{notebook.title}</h3>
        <code className="notebook-card__filename">{notebook.filename}</code>
      </div>

      <p className="notebook-card__description">{notebook.shortDescription}</p>
      <ul className="notebook-card__capabilities">
        {notebook.capabilities.slice(0, 3).map((capability) => <li key={capability}>{capability}</li>)}
      </ul>

      <div className="notebook-card__actions">
        <div className="button-row">
          <a className="button button--small button--primary" href={notebook.githubUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={15} /> Visualizar Notebook
          </a>
        </div>
        <Link className="button button--small button--details" to={`/notebooks/${notebook.slug}`}>
          <Plus size={15} /> Detalhes
        </Link>
      </div>
    </article>
  )
}
