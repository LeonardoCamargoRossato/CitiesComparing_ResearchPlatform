import { BarChart3, ExternalLink, LineChart, Network, Sigma } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import StatusBadge from '../components/StatusBadge'
import ToolCard from '../components/ToolCard'
import VisualStoryBlock from '../components/VisualStoryBlock'
import { cityComparingStory } from '../data/cityComparingStory'
import { tools } from '../data/content'

const methods = [
  ['Normal Scatter', 'Explore relações entre indicadores e diferenças territoriais em gráficos de dispersão.', LineChart],
  ['Binscatter', 'Reduza sobreposição visual e observe tendências agregadas em distribuições densas.', BarChart3],
  ['B-GCA', 'Transforme relações de proximidade em grafos para investigar conectividade e estrutura.', Network],
  ['Análise estatística', 'Compare métricas e propriedades das redes produzidas pelos métodos da pesquisa.', Sigma],
]

export default function AnalysisToolkit() {
  return (
    <>
      <PageHero eyebrow="FERRAMENTAS" title="Explorar Ferramentas" description="Conheça as ferramentas e métodos utilizados para comparar cidades, regiões e países." />

      <section className="section"><div className="container">
        <SectionTitle eyebrow="DISPONÍVEL HOJE" title="Recursos que você já pode acessar" description="A aplicação original, sua documentação visual e os materiais científicos estão disponíveis para consulta." />
        <div className="available-tool card">
          <div><StatusBadge tone="accent">Disponível</StatusBadge><h2>City Comparing — Streamlit Alpha</h2><p>Use a aplicação original de Visual Analytics ou percorra sua documentação visual dentro desta plataforma.</p></div>
          <div className="button-row"><a className="button button--primary" href="https://analysis-socioeconomic-indicators.streamlit.app/" target="_blank" rel="noopener noreferrer">Abrir City Comparing <ExternalLink size={17} /></a><Link className="button button--ghost" to="/toolkit/citiesComparing_versaoAlphaStreamlit">Conhecer a versão Alpha</Link></div>
        </div>
        <div className="visual-story-list toolkit-story-list">{cityComparingStory.slice(0, 3).map((story, index) => <VisualStoryBlock key={story.id} story={story} index={index} items={cityComparingStory} />)}</div>
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="CÓDIGO DISPONÍVEL" title="Métodos da pesquisa" description="Os métodos já existem nos notebooks e no código científico, mesmo quando ainda não possuem uma interface React executável." />
        <div className="grid grid--4">{methods.map(([title, description, Icon]) => <article className="card method-card" key={title}><div className="card-row"><div className="icon-wrap"><Icon size={20} /></div><StatusBadge>Código disponível</StatusBadge></div><h3>{title}</h3><p>{description}</p><Link className="text-link" to="/notebooks">Ver notebooks</Link></article>)}</div>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="EM DESENVOLVIMENTO" title="Interfaces React planejadas" description="Estas interfaces representam a direção do produto, mas ainda não executam análises diretamente porque o backend não está conectado." />
        <div className="grid grid--4">{tools.map(([title, description, Icon]) => <ToolCard key={title} title={title} description={description} icon={Icon} status="Em desenvolvimento" />)}</div>
        <p className="info-note">As análises disponíveis hoje podem ser consultadas no City Comparing Alpha e nos notebooks. A futura integração computacional está descrita em <Link to="/engine">Arquitetura e Roadmap</Link>.</p>
      </div></section>
    </>
  )
}
