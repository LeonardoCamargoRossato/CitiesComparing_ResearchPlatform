import { Database, ExternalLink, FileText, FolderGit2, Layers3, Maximize2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import InteractiveImage from './InteractiveImage'

function PdfThumb({ src, title }) {
  return (
    <div className="research-preview__pdf" aria-hidden="true">
      <object data={`${src}#page=1&view=FitH`} type="application/pdf" aria-label={`Prévia de ${title}`} tabIndex="-1">
        <div className="research-preview__pdf-fallback"><FileText size={28} /><span>{title}</span></div>
      </object>
    </div>
  )
}

export default function ResearchAssetPreview({ resource }) {
  const commonLabel = `${resource.actionLabel || 'Abrir'}: ${resource.title}`

  if (resource.previewType === 'image') {
    const item = { src: resource.preview, alt: resource.title, title: resource.title }
    return <div className="research-preview"><InteractiveImage item={item} items={[item]} collectionId={`research-${resource.id}`} className="research-preview__image" /></div>
  }

  if (resource.previewType === 'pdf') {
    return (
      <a className="research-preview research-preview--control" href={resource.href} target="_blank" rel="noopener noreferrer" aria-label={commonLabel}>
        <PdfThumb src={resource.preview} title={resource.title} />
        <span className="research-preview__overlay"><ExternalLink size={18} /> Abrir</span>
      </a>
    )
  }

  if (resource.previewType === 'multi-pdf') {
    return (
      <Link className="research-preview research-preview--control research-preview--multi" to={resource.route} aria-label={commonLabel}>
        <div className="research-preview__stack">
          {resource.items.slice(0, 2).map((src, index) => <PdfThumb key={src} src={src} title={`Apresentação ${index + 1}`} />)}
        </div>
        <span className="research-preview__count">+1 apresentação</span>
        <span className="research-preview__overlay"><Layers3 size={18} /> Explorar</span>
      </Link>
    )
  }

  if (resource.previewType === 'external-site') {
    const meta = resource.previewMeta
    return (
      <a className="research-preview research-preview--control article-preview" href={resource.href} target="_blank" rel="noopener noreferrer" aria-label={commonLabel}>
        <div className="browser-bar"><span /><span /><span /><small>{meta.platform}</small></div>
        <div className="article-preview__body"><div className="article-preview__meta"><span>{meta.journal}</span><b>{meta.badge}</b></div><h4>{meta.title}</h4><p>{meta.authors}</p><small>{meta.date}</small></div>
        <span className="research-preview__overlay"><ExternalLink size={18} /> Abrir artigo</span>
      </a>
    )
  }

  if (resource.previewType === 'github') {
    const meta = resource.previewMeta
    const Icon = meta.variant === 'dataset' ? Database : FolderGit2
    return (
      <a className="research-preview research-preview--control github-preview" href={resource.href} target="_blank" rel="noopener noreferrer" aria-label={commonLabel}>
        <div className="github-preview__head"><Icon size={25} /><div><small>{meta.owner}</small><strong>{meta.repo}</strong></div></div>
        <p>{meta.path}</p>
        <div className="preview-chips">{meta.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
        <span className="research-preview__overlay"><ExternalLink size={18} /> Explorar</span>
      </a>
    )
  }

  if (resource.previewType === 'internal-page') {
    return (
      <Link className="research-preview research-preview--control research-preview--legacy" to={resource.route} aria-label={commonLabel}>
        <img src={resource.preview} alt={`Prévia de ${resource.title}`} />
        <span className="research-preview__overlay"><Maximize2 size={18} /> Conhecer</span>
      </Link>
    )
  }

  return null
}
