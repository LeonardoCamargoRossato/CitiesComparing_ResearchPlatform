import { useState } from 'react'
import Modal from '../components/Modal'
import NotebookCard from '../components/NotebookCard'
import NotebookPipeline from '../components/NotebookPipeline'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { notebookPipeline, notebooks } from '../data/notebooks'

export default function InteractiveNotebooks() {
  const [selectedNotebook, setSelectedNotebook] = useState(null)

  return (
    <>
      <PageHero
        eyebrow="CATÁLOGO DE NOTEBOOKS"
        title="Notebooks científicos"
        description="Explore os notebooks que estruturam a pesquisa, desde a engenharia dos dados até a análise visual, o Binscatter e a transformação de dispersões em redes."
      >
        <div className="hero-kicker notebook-hero-pipeline">Data Engineering → Visual Analytics → Binscatter → B-GCA → Comparação Estatística</div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="6 NOTEBOOKS PRINCIPAIS"
            title="Da preparação dos dados à comparação de redes"
            description="Cada card representa um arquivo .ipynb real da pesquisa. O código-fonte já pode ser consultado no GitHub; a execução interativa será conectada em uma próxima etapa."
          />
          <div className="grid grid--3 notebook-grid">
            {notebooks.map((notebook) => (
              <NotebookCard key={notebook.id} notebook={notebook} onOpenNotebook={setSelectedNotebook} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionTitle
            eyebrow="VISÃO CONCEITUAL"
            title="Pipeline da pesquisa"
            description="Esta sequência apresenta o fluxo conceitual da plataforma e da pesquisa, sem implicar uma dependência computacional rígida entre todos os notebooks."
          />
          <NotebookPipeline items={notebookPipeline} />
        </div>
      </section>

      <Modal open={Boolean(selectedNotebook)} title="Execução interativa" onClose={() => setSelectedNotebook(null)}>
        <p>Execução interativa será disponibilizada em uma próxima etapa.</p>
        {selectedNotebook && <p className="modal-file-note"><code>{selectedNotebook.filename}</code></p>}
      </Modal>
    </>
  )
}
