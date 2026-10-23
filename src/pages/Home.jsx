import { ArrowRight, ChartNoAxesCombined, FlaskConical, Network } from 'lucide-react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import ImageGallery from '../components/ImageGallery'
import PageHero from '../components/PageHero'
import PdfViewer from '../components/PdfViewer'
import SectionTitle from '../components/SectionTitle'
import StatusBadge from '../components/StatusBadge'
import { galleryItems, platformAreas } from '../data/content'

export default function Home() {
  return (
    <>
      <PageHero eyebrow="Plataforma de pesquisa" title="Cities Comparing Research Platform" description="Uma plataforma de pesquisa para comparar cidades, regiões e países por meio de análise visual, padrões livres de escala, métodos estatísticos e abordagens baseadas em grafos.">
        <div className="hero-kicker">Econofísica • Visual Analytics • Ciência de Dados</div>
      </PageHero>

      <section className="section section--tight"><div className="container button-row hero-actions">
        <Link className="button button--primary" to="/research">Explorar Pesquisa <ArrowRight size={17} /></Link>
        <Link className="button button--ghost" to="/toolkit">Abrir Toolkit</Link>
        <Link className="button button--ghost" to="/notebooks">Notebooks Interativos</Link>
        <a className="button button--ghost" href="assets/docs/Dissertacao_Econofisica_LeonardoRossato.pdf" target="_blank" rel="noreferrer">Ver Dissertação</a>
      </div></section>

      <section className="section"><div className="container split-grid">
        <SectionTitle eyebrow="Pergunta de pesquisa" title="Como comparar cidades pequenas e médias entre diferentes países?" description="Diferentes países utilizam critérios de cálculo, estruturas administrativas e padrões distintos de coleta e organização de dados. A plataforma explora abordagens visuais e quantitativas para tornar essas comparações mais transparentes, reprodutíveis e estruturadas." />
        <div className="research-question-panel"><span>Critérios distintos</span><span>Estruturas administrativas distintas</span><span>Padrões de dados distintos</span><span>Comparabilidade entre países</span></div>
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="Metodologia principal" title="Três abordagens analíticas complementares" />
        <div className="grid grid--3">
          <FeatureCard icon={FlaskConical} title="Detecção de Padrões Livres de Escala" description="Investiga padrões dependentes de escala em indicadores socioeconômicos, incluindo estruturas visuais em escala log-log." />
          <FeatureCard icon={ChartNoAxesCombined} title="Processo Binscatter" description="Organiza informações densas de scatter em bins para reduzir overplotting e tornar padrões gerais mais fáceis de investigar." />
          <FeatureCard icon={Network} title="B-GCA / ScatterGraph" description="Baseado no Gravitational Clustering Algorithm. Converte a geometria de scatter plots em estruturas de grafo para explorar densidade, conectividade e padrões." />
        </div>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="Plataforma" title="Principais áreas da plataforma" description="Um ambiente modular de pesquisa pensado para evoluir da documentação científica para ferramentas computacionais interativas." />
        <div className="grid grid--4">{platformAreas.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="Pesquisa visual" title="Graphical Abstract e Galeria de Aplicações" description="Explore visualmente os principais resultados, métodos e aplicações desenvolvidos ao longo da pesquisa." />
        <ImageGallery items={galleryItems} />
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="Documento de pesquisa" title="Dissertação de Mestrado" />
        <PdfViewer title="Comparative Analysis of Socioeconomic Indicators of Cities in Brazil, the United States, and Other Countries" src="assets/docs/Dissertacao_Econofisica_LeonardoRossato.pdf" description="Leonardo Camargo Rossato — Dissertação de Mestrado — Física / Econofísica" />
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="Aplicação legada" title="City Comparing — Apresentação de Visual Analytics" description="Apresentação que documenta a versão anterior da aplicação City Comparing desenvolvida em Streamlit." />
        <PdfViewer title="City Comparing — Apresentação de Visual Analytics" src="assets/docs/Apresentacao_Streamlit_App_VisualAnalytics.pdf" description="Implementação anterior do City Comparing desenvolvida em Streamlit." badge={<StatusBadge tone="accent">Legado / Versão Alpha</StatusBadge>} />
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="História do projeto" title="Evolução da pesquisa" description="Uma visão simples de como a pesquisa e suas interfaces evoluíram ao longo do tempo." />
        <div className="timeline">{['Notebooks de Pesquisa', 'Streamlit Alpha', 'Dissertação de Mestrado', 'Cities Comparing Research Platform'].map((item, index) => <div className="timeline__item" key={item}><span>{index + 1}</span><div><strong>{item}</strong>{index < 3 && <p>Próxima etapa →</p>}</div></div>)}</div>
      </div></section>
    </>
  )
}
