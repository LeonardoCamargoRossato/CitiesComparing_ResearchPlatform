import { ArrowDown, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import StatusBadge from '../components/StatusBadge'

const evolution = ['Notebooks de pesquisa', 'Streamlit Alpha', 'Dissertação de Mestrado', 'Cities Comparing Research Platform']

export default function About() {
  return (
    <>
      <PageHero eyebrow="SOBRE" title="Cities Comparing Research Platform" description="Uma plataforma científica para organizar, explorar e reproduzir métodos de comparação socioeconômica entre cidades, regiões e países." />

      <section className="section"><div className="container about-grid"><article className="about-project"><SectionTitle eyebrow="O PROJETO" title="Pesquisa transformada em plataforma" /><p>O Cities Comparing nasceu de uma pesquisa de mestrado em Física e Econofísica. A plataforma reúne documentação científica, dados, notebooks e interfaces visuais para tornar o processo de comparação mais acessível, transparente e reprodutível.</p><div className="tag-cloud">{['Econofísica', 'Visual Analytics', 'Ciência de Dados', 'Análise Estatística', 'Ciência de Redes'].map((item) => <span key={item}>{item}</span>)}</div></article><article className="card profile-card"><p className="eyebrow">AUTOR</p><h2>Leonardo Camargo Rossato</h2><p>Física, desenvolvimento de software, Ciência de Dados e Econofísica.</p><div className="button-row"><a className="button button--primary" href="https://leonardocamargorossato.github.io/LCR-SolutionsArchitecture-IA-Quantum/#/" target="_blank" rel="noreferrer">Ver portfólio <ExternalLink size={17} /></a><a className="button button--ghost" href="https://github.com/LeonardoCamargoRossato" target="_blank" rel="noreferrer">GitHub</a></div></article></div></section>

      <section className="section section--muted"><div className="container"><SectionTitle eyebrow="METODOLOGIA" title="Métodos usados na pesquisa" /><div className="grid grid--3">{[['Scatter', 'Exploração visual das relações entre variáveis e escalas territoriais.'], ['Binscatter', 'Agregação de distribuições densas para tornar tendências mais legíveis.'], ['B-GCA', 'Representação das relações de proximidade como redes e estruturas conectadas.']].map(([title, description]) => <article className="card method-card" key={title}><h3>{title}</h3><p>{description}</p><Link className="text-link" to="/notebooks">Explorar nos notebooks</Link></article>)}</div></div></section>

      <section className="section"><div className="container"><SectionTitle eyebrow="EVOLUÇÃO" title="Da pesquisa à plataforma" /><div className="timeline">{evolution.map((item, index) => <div className="timeline__item" key={item}><span>{index + 1}</span><div><strong>{item}</strong>{index < evolution.length - 1 && <p>Próxima etapa →</p>}</div></div>)}</div></div></section>

      <section className="section section--muted" id="roadmap"><div className="container two-column"><div><SectionTitle eyebrow="ARQUITETURA E ROADMAP" title="Uma integração planejada" description="A experiência atual funciona como frontend estático em React. A camada computacional será conectada em uma etapa futura." /><StatusBadge>Em desenvolvimento</StatusBadge><p className="info-note"><strong>A API ainda não existe.</strong> Ela é uma arquitetura planejada para conectar as ferramentas React aos métodos científicos implementados em Python.</p><Link className="button button--ghost" to="/engine">Ver arquitetura técnica</Link></div><div className="architecture-flow">{['Frontend React atual', 'Engine Python futura', 'API futura', 'Métodos analíticos'].map((item, index, items) => <div key={item} className="architecture-flow__item"><div>{item}</div>{index < items.length - 1 && <ArrowDown size={20} />}</div>)}</div></div></section>
    </>
  )
}
