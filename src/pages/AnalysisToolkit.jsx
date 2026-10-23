import { ExternalLink } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../components/Modal'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import ToolCard from '../components/ToolCard'
import VisualStoryBlock from '../components/VisualStoryBlock'
import { tools } from '../data/content'
import { cityComparingStory } from '../data/cityComparingStory'

export default function AnalysisToolkit() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <PageHero title="Toolkit de Análise" description="Ferramentas interativas para explorar datasets socioeconômicos entre cidades, regiões e países." />
      <section className="section"><div className="container">
        <SectionTitle eyebrow="Arquitetura de ferramentas" title="Interfaces analíticas" description="As interfaces organizam as diferentes técnicas de análise e estão preparadas para receber integração computacional progressivamente." />
        <div className="grid grid--4">{tools.map(([title, description, Icon]) => <ToolCard key={title} title={title} description={description} icon={Icon} onOpen={() => setOpen(true)} />)}</div>
      </div></section>

      <section className="section section--muted city-story-section"><div className="container">
        <SectionTitle eyebrow="Aplicação original" title="Explore o City Comparing" description="Entenda, passo a passo, como a aplicação original permite explorar, comparar e representar indicadores socioeconômicos." />
        <div className="visual-story-list">{cityComparingStory.map((story, index) => <VisualStoryBlock key={story.id} story={story} index={index} items={cityComparingStory} />)}</div>
        <div className="story-cta card">
          <div><p className="eyebrow">Aplicação Alpha</p><h2>Explore a aplicação original</h2><p>Abra a versão Alpha do City Comparing em Streamlit e experimente as ferramentas apresentadas acima.</p></div>
          <div className="button-row"><a className="button button--primary" href="https://analysis-socioeconomic-indicators.streamlit.app/" target="_blank" rel="noreferrer">Abrir City Comparing <ExternalLink size={17} /></a><a className="button button--ghost" href="assets/docs/Apresentacao_Streamlit_App_VisualAnalytics.pdf" target="_blank" rel="noreferrer">Ver apresentação</a></div>
        </div>
      </div></section>

      <section className="section"><div className="container legacy-box"><div><p className="eyebrow">Aplicação Legada</p><h2>City Comparing — Streamlit Alpha</h2><p>Esta foi a versão Alpha da ferramenta de Visual Analytics e funciona como referência para a evolução da plataforma.</p></div><div className="button-row"><Link className="button button--primary" to="/toolkit/citiesComparing_versaoAlphaStreamlit">Conhecer a versão Alpha</Link><a className="button button--ghost" href="https://analysis-socioeconomic-indicators.streamlit.app/" target="_blank" rel="noopener noreferrer">Abrir Streamlit <ExternalLink size={17} /></a></div></div></section>
      <Modal open={open} title="Toolkit de Análise" onClose={() => setOpen(false)}><p>Esta ferramenta já faz parte da arquitetura da plataforma. A integração computacional será adicionada progressivamente por meio do Engine Python/API.</p></Modal>
    </>
  )
}
