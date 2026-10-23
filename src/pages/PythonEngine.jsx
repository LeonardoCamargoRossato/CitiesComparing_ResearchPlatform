import { ArrowDown, Code2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import StatusBadge from '../components/StatusBadge'

const modules = ['Engenharia de Dados', 'Scatter', 'Binscatter', 'B-GCA', 'Análise Estatística', 'Comparação Cidade / Região / País']
const endpoints = ['GET /api/health', 'POST /api/scatter', 'POST /api/binscatter', 'POST /api/bgca', 'POST /api/statistics', 'POST /api/compare']
function Flow({ items }) { return <div className="architecture-flow">{items.map((item, index) => <div key={item} className="architecture-flow__item"><div>{item}</div>{index < items.length - 1 && <ArrowDown size={20} />}</div>)}</div> }

export default function PythonEngine() {
  return (
    <>
      <PageHero eyebrow="ROADMAP TÉCNICO" title="Arquitetura e Roadmap" description="Visão técnica da arquitetura planejada para conectar o frontend React aos métodos científicos em Python." badge={<StatusBadge tone="accent">Arquitetura futura — backend ainda não conectado</StatusBadge>} />
      <section className="section"><div className="container two-column"><div><SectionTitle eyebrow="Fluxo do sistema" title="Arquitetura computacional" /><Flow items={['Frontend React', 'REST API', 'Engine Python', 'Módulos Analíticos']} /></div><div><SectionTitle eyebrow="Módulos" title="Módulos Analíticos" /><div className="module-list">{modules.map((item) => <span key={item}>{item}</span>)}</div></div></div></section>
      <section className="section section--muted"><div className="container"><SectionTitle eyebrow="Prévia técnica" title="API Planejada" description="Os endpoints abaixo representam a arquitetura planejada e ainda não estão implementados." /><div className="endpoint-grid">{endpoints.map((item) => <code key={item}><Code2 size={15} /> {item}</code>)}</div></div></section>
      <section className="section"><div className="container"><SectionTitle eyebrow="Roadmap" title="Arquitetura Futura" /><Flow items={['React + Vite', 'FastAPI planejada', 'Engine analítico Python', 'Pandas / NumPy / SciPy / NetworkX / Plotly']} /><p className="info-note"><strong>A API ainda não existe.</strong> Ela é uma arquitetura planejada para conectar as ferramentas React aos métodos científicos implementados em Python. O frontend permanece compatível com hospedagem estática no GitHub Pages.</p></div></section>
    </>
  )
}
