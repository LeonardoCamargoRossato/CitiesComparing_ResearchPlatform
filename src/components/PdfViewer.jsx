import { Download, ExternalLink } from 'lucide-react'

export default function PdfViewer({ title, src, description, height = 780, badge }) {
  return (
    <article className="pdf-panel">
      <div className="pdf-panel__header">
        <div>
          <div className="pdf-panel__title-row"><h3>{title}</h3>{badge}</div>
          {description && <p>{description}</p>}
        </div>
        <div className="button-row">
          <a className="button button--small button--ghost" href={src} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Abrir PDF em nova aba</a>
          <a className="button button--small button--ghost" href={src} download><Download size={15} /> Baixar PDF</a>
        </div>
      </div>
      <div className="pdf-frame" style={{ height }}><iframe src={src} title={title} loading="lazy" /></div>
      <p className="asset-note">Se o visualizador estiver vazio, adicione o PDF correspondente em <code>public/assets/docs/</code>.</p>
    </article>
  )
}
