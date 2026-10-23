import { Download, ExternalLink, FileText } from 'lucide-react'

export default function PdfResourcePreview({ item }) {
  return (
    <article className="card pdf-resource-card">
      <a className="pdf-resource-card__preview" href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Abrir PDF: ${item.title}`}>
        <object data={`${item.src}#page=1&view=FitH`} type="application/pdf" aria-label={`Prévia de ${item.title}`} tabIndex="-1">
          <div className="pdf-resource-card__fallback"><FileText size={34} /><span>Prévia do PDF</span></div>
        </object>
        <span className="research-preview__overlay"><ExternalLink size={18} /> Abrir</span>
      </a>
      <div className="pdf-resource-card__body"><h3>{item.title}</h3><div className="button-row"><a className="button button--small button--primary" href={item.src} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} /> Abrir PDF</a><a className="button button--small button--ghost" href={item.src} download><Download size={15} /> Baixar</a></div></div>
    </article>
  )
}
