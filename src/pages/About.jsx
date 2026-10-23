import { ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'

export default function About() {
  return (
    <>
      <PageHero title="Sobre o Autor" description="Leonardo Camargo Rossato" />
      <section className="section"><div className="container about-grid"><article className="card profile-card"><p className="eyebrow">Perfil</p><h2>Leonardo Camargo Rossato</h2><p>Física, Desenvolvimento de Software, IA Aplicada, Ciência de Dados, Econofísica e Tecnologias Quânticas.</p><div className="button-row"><a className="button button--primary" href="https://leonardocamargorossato.github.io/LCR-SolutionsArchitecture-IA-Quantum/#/" target="_blank" rel="noreferrer">Abrir Portfólio de Leonardo Camargo Rossato <ExternalLink size={17} /></a><a className="button button--ghost" href="https://github.com/LeonardoCamargoRossato" target="_blank" rel="noreferrer">GitHub</a></div></article><article className="about-project"><SectionTitle eyebrow="Projeto" title="Sobre este projeto" /><p>Cities Comparing Research Platform é uma evolução da pesquisa de mestrado em Econofísica, combinando métodos complementares e interfaces de software para análise socioeconômica comparativa.</p><div className="tag-cloud">{['Econofísica', 'Visual Analytics', 'Ciência de Dados', 'Análise Estatística', 'Ciência de Redes'].map((item) => <span key={item}>{item}</span>)}</div></article></div></section>
    </>
  )
}
