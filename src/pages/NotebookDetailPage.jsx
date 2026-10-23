import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import NotebookLibraryTags from '../components/NotebookLibraryTags'
import NotebookPipeline from '../components/NotebookPipeline'
import NotebookResultsGallery from '../components/NotebookResultsGallery'
import StatusBadge from '../components/StatusBadge'
import { getNotebookBySlug } from '../data/notebooks'

export default function NotebookDetailPage() {
  const { slug } = useParams()
  const notebook = getNotebookBySlug(slug)
  if (!notebook) return <Navigate to="/notebooks" replace />

  return (
    <>
      <section className="notebook-detail-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/notebooks">Notebooks científicos</Link><span aria-hidden="true">›</span><span>{notebook.title}</span>
          </nav>
          <div className="notebook-detail-hero__content">
            <div>
              <StatusBadge tone="accent">Código disponível</StatusBadge>
              <h1>{notebook.title}</h1>
              <code className="notebook-detail__filename">{notebook.filename}</code>
              <p>{notebook.longDescription}</p>
              <div className="button-row">
                <a className="button button--primary" href={notebook.githubUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={17} /> Visualizar Notebook no GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container notebook-detail-layout">
          <article className="notebook-detail-main">
            <section className="notebook-detail-section">
              <p className="eyebrow">CAPACIDADES</p>
              <h2>O que este notebook faz</h2>
              <p>{notebook.methodology}</p>
              <ul className="detail-list">{notebook.capabilities.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="notebook-detail-section">
              <p className="eyebrow">PROCESSO</p>
              <h2>Fluxo da análise</h2>
              <NotebookPipeline items={notebook.workflow} compact />
            </section>

            <section className="notebook-detail-section">
              <p className="eyebrow">OPERAÇÕES</p>
              <h2>Principais operações</h2>
              <ul className="detail-list">{notebook.operations.map((item) => <li key={item}>{item}</li>)}</ul>
            </section>

            <section className="notebook-detail-section">
              <p className="eyebrow">RESULTADOS</p>
              <h2>Resultados e visualizações</h2>
              <div className="detail-output-grid">{notebook.outputs.map((item) => <div key={item}>{item}</div>)}</div>
            </section>

            <section className="notebook-detail-section">
              <p className="eyebrow">GALERIA</p>
              <h2>Galeria de resultados</h2>
              <NotebookResultsGallery figures={notebook.figures} collectionId={`notebook-${notebook.slug}`} />
            </section>
          </article>

          <aside className="notebook-detail-aside">
            <div className="card notebook-detail-panel">
              <h3>Bibliotecas utilizadas</h3>
              <NotebookLibraryTags libraries={notebook.libraries} />
            </div>
            <div className="card notebook-detail-panel">
              <h3>Dados utilizados</h3>
              <ul>{notebook.datasets.map((dataset) => <li key={dataset}>{dataset}</li>)}</ul>
            </div>
            {notebook.notes && <div className="card notebook-detail-panel"><h3>Notas</h3><p>{notebook.notes}</p></div>}
            <Link className="text-link notebook-detail-back" to="/notebooks"><ArrowLeft size={16} /> Voltar aos notebooks</Link>
          </aside>
        </div>
      </section>
    </>
  )
}
