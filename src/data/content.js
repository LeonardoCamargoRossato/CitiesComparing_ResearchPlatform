import {
  BarChart3,
  BookOpen,
  Boxes,
  Database,
  FileText,
  FlaskConical,
  GitBranch,
  Globe2,
  LineChart,
  Network,
  NotebookTabs,
  Presentation,
  Scale,
  Search,
  Sigma,
} from 'lucide-react'

export const galleryItems = [
  {
    src: 'assets/images/Graphical_Abstract.png',
    alt: 'Graphical Abstract da pesquisa Cities Comparing',
    title: 'Graphical Abstract',
    caption: 'Graphical Abstract — análise comparativa de indicadores socioeconômicos usando Econofísica, Visual Analytics e Ciência de Dados.',
  },
]

export const platformAreas = [
  { title: 'Pesquisa', description: 'Dissertação, apresentações, datasets e recursos científicos reunidos em um só lugar.', to: '/research', icon: BookOpen },
  { title: 'Notebooks', description: 'Código científico e fluxos reprodutíveis utilizados na pesquisa.', to: '/notebooks', icon: NotebookTabs },
  { title: 'Explorar Ferramentas', description: 'Scatter, Binscatter, B-GCA, análises estatísticas e a aplicação City Comparing.', to: '/toolkit', icon: BarChart3 },
]

export const researchCategories = [
  ['Dissertação de Mestrado', 'Disponível na página Início', FileText, 'available'],
  ['Artigos Científicos', 'A ser conectado', FlaskConical, 'soon'],
  ['Graphical Abstract', 'Disponível na página Início', Presentation, 'available'],
  ['Apresentações', 'Apresentação legada disponível na página Início', Presentation, 'available'],
  ['Press Release', 'Em breve', Globe2, 'soon'],
  ['Informações Suplementares', 'Em breve', BookOpen, 'soon'],
  ['Datasets', 'A ser conectado', Database, 'soon'],
  ['Repositórios GitHub', 'A ser conectado', GitBranch, 'soon'],
  ['City Comparing Legado', 'Aplicação Alpha em Streamlit', LineChart, 'available'],
]

export const notebooks = [
  ['Análise de Normal Scatter', 'Investigue variáveis socioeconômicas por meio de gráficos de dispersão convencionais.', LineChart],
  ['Processo Binscatter', 'Explore relações agrupadas em bins para reduzir overplotting e revelar tendências gerais.', BarChart3],
  ['B-GCA / ScatterGraph', 'Explore representações em grafo derivadas da geometria de scatter plots.', Network],
  ['Análise Estatística', 'Inspecione métricas-resumo e evidências estatísticas comparativas.', Sigma],
  ['Análise Regional', 'Estude escalas nacionais, macrorregionais e regionais.', Globe2],
  ['Engenharia de Dados', 'Prepare, normalize e organize datasets entre diferentes países.', Database],
]

export const tools = [
  ['Explorador de Scatter', 'Explore relações socioeconômicas com visualizações de scatter configuráveis.', LineChart],
  ['Explorador de Binscatter', 'Investigue padrões agrupados em bins e agregação visual.', BarChart3],
  ['Explorador B-GCA', 'Transforme a geometria do scatter em estruturas analíticas orientadas a grafos.', Network],
  ['Análise de Distribuições', 'Inspecione distribuições e comportamentos dependentes de escala.', Sigma],
  ['Métricas Estatísticas', 'Revise indicadores quantitativos para análise comparativa.', Scale],
  ['Comparar Cidades', 'Compare indicadores em nível municipal entre diferentes contextos.', Search],
  ['Comparar Regiões', 'Explore estruturas regionais e macrorregionais.', Boxes],
  ['Comparar Países', 'Contraste padrões socioeconômicos entre países.', Globe2],
]
