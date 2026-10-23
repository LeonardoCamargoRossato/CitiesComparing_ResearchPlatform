import { ExternalLink, BarChart3, GitCompare, LayoutDashboard, MousePointer2, Network, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import VisualStoryBlock from '../components/VisualStoryBlock'
import { cityComparingStory } from '../data/cityComparingStory'

const streamlitUrl = 'https://analysis-socioeconomic-indicators.streamlit.app/'
const presentationUrl = `${import.meta.env.BASE_URL}assets/docs/Apresentacao_Streamlit_App_VisualAnalytics.pdf`

const howTo = [
  'Escolher o tipo e a escala de análise.',
  'Selecionar país, região, estado ou cidades quando aplicável.',
  'Selecionar variáveis e indicadores socioeconômicos.',
  'Escolher a técnica: Normal Scatter, Binscatter, ScatterGraph / B-GCA ou análise de DataFrame.',
  'Explorar interativamente com hover, zoom, seleção, comparação e ferramentas Plotly.',
]

const features = [
  [LayoutDashboard, 'Dashboard principal', 'Acesso às diferentes ferramentas e escolha da escala de análise.'],
  [GitCompare, 'Comparar cidades', 'Comparação lado a lado e contexto das cidades dentro da distribuição.'],
  [SlidersHorizontal, 'Normal Scatter', 'Eixos X/Y, escalas normal/log, cores por categorias e análise visual de padrões.'],
  [BarChart3, 'Binscatter', 'Agrupamento em bins, redução de overplotting e identificação de tendências.'],
  [Network, 'ScatterGraph / B-GCA', 'Conversão de dispersões em grafos, conexões por proximidade e análise estrutural da rede.'],
  [MousePointer2, 'Exploração Plotly', 'Hover, zoom, seleção e inspeção de pontos diretamente nas visualizações.'],
]

export default function CityComparingLegacy() {
  return (
    <>
      <PageHero eyebrow="APLICAÇÃO LEGADA" title="City Comparing — Streamlit Alpha" description="A versão original da ferramenta de Visual Analytics criada durante a pesquisa. Ela serviu de base para a evolução da Cities Comparing Research Platform."><div className="button-row"><a className="button button--primary" href={streamlitUrl} target="_blank" rel="noopener noreferrer">Abrir Streamlit legado <ExternalLink size={17} /></a><a className="button button--ghost" href={presentationUrl} target="_blank" rel="noopener noreferrer">Ver apresentação</a></div></PageHero>

      <section className="section"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/toolkit">Toolkit de Análise</Link><span>›</span><span>City Comparing — Streamlit Alpha</span></nav><SectionTitle eyebrow="Guia" title="Como usar" description="Um fluxo conceitual para navegar pela aplicação original e explorar as diferentes técnicas da pesquisa." /><div className="legacy-howto">{howTo.map((text, index) => <article key={text}><span>{String(index + 1).padStart(2, '0')}</span><p>{text}</p></article>)}</div></div></section>

      <section className="section section--muted"><div className="container"><SectionTitle eyebrow="Ferramentas" title="Funções disponíveis" /><div className="grid grid--3">{features.map(([Icon, title, description]) => <article className="card legacy-feature-card" key={title}><div className="icon-wrap"><Icon size={20} /></div><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section className="section city-story-section"><div className="container"><SectionTitle eyebrow="Screenshots reais" title="Explore a interface original" description="As sete imagens documentam o fluxo da aplicação. Clique em qualquer screenshot para abrir o lightbox, ampliar e navegar pela sequência." /><div className="visual-story-list">{cityComparingStory.map((story, index) => <VisualStoryBlock key={story.id} story={story} index={index} items={cityComparingStory} />)}</div></div></section>

      <section className="section section--muted"><div className="container legacy-box"><div><p className="eyebrow">Versão Alpha / Legada</p><h2>Experimente a versão original</h2><p>A aplicação em Streamlit representa uma etapa anterior do projeto e pode apresentar limitações de disponibilidade ou performance.</p></div><a className="button button--primary" href={streamlitUrl} target="_blank" rel="noopener noreferrer">Abrir City Comparing no Streamlit <ExternalLink size={17} /></a></div></section>
    </>
  )
}
