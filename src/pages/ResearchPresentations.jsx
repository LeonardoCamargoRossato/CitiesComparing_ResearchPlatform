import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import PdfResourcePreview from '../components/PdfResourcePreview'
import SectionTitle from '../components/SectionTitle'
import { presentationResources } from '../data/researchResources'

export default function ResearchPresentations() {
  return (
    <>
      <PageHero title="Apresentações" description="Apresentações utilizadas para comunicar a pesquisa em Econofísica, Visual Analytics e a evolução do City Comparing." />
      <section className="section"><div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/research">Pesquisa</Link><span>›</span><span>Apresentações</span></nav>
        <SectionTitle eyebrow="Materiais de pesquisa" title="Apresentações disponíveis" description="Abra cada PDF em uma nova aba ou faça o download do arquivo local." />
        <div className="grid grid--3">{presentationResources.map((item) => <PdfResourcePreview key={item.id} item={item} />)}</div>
      </div></section>
    </>
  )
}
