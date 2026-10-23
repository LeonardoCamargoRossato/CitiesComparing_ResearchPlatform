import { ArrowRight, BarChart3, BookOpen, ChartNoAxesCombined, Eye, FlaskConical, Network, NotebookTabs, Repeat2, Scale, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import ImageGallery from '../components/ImageGallery'
import PageHero from '../components/PageHero'
import SectionTitle from '../components/SectionTitle'
import { galleryItems } from '../data/content'

const tasks = [
  { title: 'Comparar', description: 'Explore diferenças entre cidades, regiões e países a partir de indicadores socioeconômicos.', to: '/toolkit', icon: Scale },
  { title: 'Visualizar', description: 'Investigue relações entre variáveis usando gráficos de dispersão e diferentes escalas.', to: '/toolkit', icon: Eye },
  { title: 'Analisar', description: 'Explore técnicas como Binscatter e B-GCA para identificar tendências e estruturas.', to: '/toolkit', icon: BarChart3 },
  { title: 'Reproduzir', description: 'Acesse notebooks, código, datasets e materiais científicos da pesquisa.', to: '/notebooks', icon: Repeat2 },
]

const paths = [
  { eyebrow: 'Pesquisa', title: 'Conheça a pesquisa', description: 'Acesse artigo, dissertação, datasets, apresentações e materiais suplementares.', label: 'Explorar Pesquisa', to: '/research', icon: BookOpen },
  { eyebrow: 'Ferramentas', title: 'Explore as ferramentas', description: 'Conheça Scatter, Binscatter, B-GCA e a aplicação City Comparing.', label: 'Explorar Ferramentas', to: '/toolkit', icon: Wrench },
  { eyebrow: 'Notebooks', title: 'Reproduza os métodos', description: 'Acesse os notebooks científicos, código e fluxo da pesquisa.', label: 'Ver Notebooks', to: '/notebooks', icon: NotebookTabs },
]

export default function Home() {
  return (
    <>
      <PageHero eyebrow="PLATAFORMA DE PESQUISA" title="Cities Comparing" description="Compare cidades e explore padrões socioeconômicos por meio de Econofísica e Visual Analytics.">
        <div className="home-hero-aside">
          <p>Acesse a pesquisa, explore ferramentas de análise e reproduza os métodos utilizados na comparação de cidades, regiões e países.</p>
          <div className="button-row">
            <Link className="button button--primary" to="/toolkit">Explorar Ferramentas <ArrowRight size={17} /></Link>
            <Link className="button button--primary" to="/research">Conhecer a Pesquisa</Link>
          </div>
          <Link className="text-link" to="/notebooks">Ver Notebooks <ArrowRight size={16} /></Link>
        </div>
      </PageHero>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="COMECE POR AQUI" title="O que você pode fazer na plataforma" description="Escolha uma tarefa para acessar diretamente os materiais e recursos disponíveis hoje." />
        <div className="grid grid--4 home-task-grid">
          {tasks.map(({ icon: Icon, ...task }) => <Link className="card home-task-card" to={task.to} key={task.title}><div className="icon-wrap"><Icon size={22} /></div><h3>{task.title}</h3><p>{task.description}</p><span className="text-link">Explorar <ArrowRight size={16} /></span></Link>)}
        </div>
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="NAVEGAÇÃO" title="Três caminhos principais" description="Pesquisa, ferramentas e notebooks organizam o conteúdo da plataforma sem separar ciência, método e reprodução." />
        <div className="grid grid--3 home-path-grid">
          {paths.map(({ icon: Icon, ...path }) => <article className="card home-path-card" key={path.title}><div className="card-row"><p className="eyebrow">{path.eyebrow}</p><div className="icon-wrap"><Icon size={22} /></div></div><h3>{path.title}</h3><p>{path.description}</p><Link className="button button--ghost" to={path.to}>{path.label} <ArrowRight size={16} /></Link></article>)}
        </div>
      </div></section>

      <section className="section"><div className="container split-grid">
        <SectionTitle eyebrow="PERGUNTA DE PESQUISA" title="Como comparar cidades pequenas e médias entre diferentes países?" description="Critérios de cálculo, estruturas administrativas e padrões de coleta variam entre países e dificultam comparações diretas. O Cities Comparing organiza métodos visuais e quantitativos para tornar essas comparações mais transparentes e reproduzíveis." />
        <div className="research-question-panel"><span>Critérios distintos</span><span>Estruturas administrativas</span><span>Padrões de coleta</span><span>Comparabilidade internacional</span></div>
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="MÉTODOS" title="Como a análise funciona" description="Três abordagens complementares ajudam a observar tendências, reduzir ruído visual e investigar estruturas nos dados." />
        <div className="grid grid--3">
          <FeatureCard icon={FlaskConical} title="Padrões livres de escala" description="Investiga como indicadores socioeconômicos se comportam em diferentes escalas e representações." to="/toolkit" />
          <FeatureCard icon={ChartNoAxesCombined} title="Binscatter" description="Agrupa distribuições densas para reduzir sobreposição e revelar tendências gerais com mais clareza." to="/notebooks" />
          <FeatureCard icon={Network} title="B-GCA / ScatterGraph" description="Transforma relações de proximidade dos scatter plots em grafos para estudar conectividade e estrutura." to="/notebooks" />
        </div>
      </div></section>

      <section className="section"><div className="container">
        <SectionTitle eyebrow="PESQUISA VISUAL" title="Graphical Abstract" description="Uma síntese visual curta dos métodos, dados e comparações desenvolvidos na pesquisa." />
        <ImageGallery items={galleryItems} />
      </div></section>

      <section className="section section--muted"><div className="container">
        <SectionTitle eyebrow="MATERIAIS" title="Pesquisa e evolução do projeto" description="Os documentos completos ficam reunidos na área de Pesquisa; a versão original da aplicação permanece documentada como parte da evolução da plataforma." />
        <div className="grid grid--3">
          <FeatureCard icon={BookOpen} title="Dissertação de Mestrado" description="Fundamentação científica, metodologia e resultados da análise comparativa." to="/research" />
          <FeatureCard icon={ChartNoAxesCombined} title="City Comparing — Streamlit Alpha" description="Conheça a aplicação original de Visual Analytics e seu fluxo de exploração." to="/toolkit/citiesComparing_versaoAlphaStreamlit" />
          <FeatureCard icon={NotebookTabs} title="Notebooks e código" description="Consulte os notebooks reais e reproduza as etapas da pesquisa a partir do código disponível." to="/notebooks" />
        </div>
      </div></section>
    </>
  )
}
