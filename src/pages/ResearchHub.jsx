import PageHero from '../components/PageHero'
import ResearchCard from '../components/ResearchCard'
import SectionTitle from '../components/SectionTitle'
import { researchResources } from '../data/researchResources'

export default function ResearchHub() {
  return (
    <>
      <PageHero title="Hub de Pesquisa" description="Publicações científicas, dissertação, datasets, apresentações e materiais suplementares da pesquisa." />
      <section className="section"><div className="container"><SectionTitle eyebrow="Biblioteca" title="Materiais de Pesquisa" description="Acesse diretamente os documentos, publicações, dados, repositórios e aplicações que compõem a pesquisa." /><div className="grid grid--3 research-resource-grid">{researchResources.map((resource) => <ResearchCard key={resource.id} resource={resource} />)}</div></div></section>
      <section className="section section--muted"><div className="container"><SectionTitle eyebrow="Método" title="Metodologia de Pesquisa" /><div className="methodology-steps"><article className="method-step"><span>01</span><div><h3>Engenharia de Dados</h3><p>Coleta, organização, preparação e estruturação entre países de dados socioeconômicos.</p></div></article><article className="method-step"><span>02</span><div><h3>Desenvolvimento e Aplicação de Técnicas Analíticas</h3><p>Normal Scatter • Binscatter • B-GCA • Métricas Estatísticas</p></div></article><article className="method-step"><span>03</span><div><h3>Análise, Comparação e Representação dos Resultados</h3><p>Comparação visual e quantitativa em escalas municipal, regional e nacional.</p></div></article></div></div></section>
    </>
  )
}
