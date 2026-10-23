import { ExternalLink, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useImageViewer } from '../context/ImageViewerContext'
import ResearchAssetPreview from './ResearchAssetPreview'
import StatusBadge from './StatusBadge'

export default function ResearchCard({ resource }) {
  const { openViewer } = useImageViewer()
  const { icon: Icon, title, subtitle, description, status, route, href, external, actionLabel } = resource

  let action = null
  if (route) {
    action = <Link className="button button--ghost button--small research-resource-card__action" to={route}>{actionLabel} <MoveRight size={15} /></Link>
  } else if (href) {
    action = <a className="button button--ghost button--small research-resource-card__action" href={href} target={external || resource.previewType === 'pdf' ? '_blank' : undefined} rel={external || resource.previewType === 'pdf' ? 'noopener noreferrer' : undefined}>{actionLabel} {(external || resource.previewType === 'pdf') && <ExternalLink size={15} />}</a>
  } else if (resource.previewType === 'image' && resource.preview) {
    action = <button className="button button--ghost button--small research-resource-card__action" type="button" onClick={() => openViewer({ items: [{ src: resource.preview, alt: resource.title, title: resource.title }], index: 0, collectionId: `research-${resource.id}` })}>{actionLabel}</button>
  }

  return (
    <article className="card research-resource-card">
      <ResearchAssetPreview resource={resource} />
      <div className="research-resource-card__body">
        <div className="card-row"><div className="icon-wrap">{Icon && <Icon size={20} />}</div><StatusBadge tone="accent">{status === 'available' ? 'Disponível' : status}</StatusBadge></div>
        <div className="research-resource-card__heading"><h3>{title}</h3>{subtitle && <small>{subtitle}</small>}</div>
        <p>{description}</p>
        {action}
      </div>
    </article>
  )
}
