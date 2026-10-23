const imagePath = (number) =>
  `${import.meta.env.BASE_URL}assets/images/streamlit-cities-comparing-${String(number).padStart(2, '0')}.png`

export const cityComparingStory = [
  {
    id: 1,
    src: imagePath(1),
    alt: 'Visão geral da pesquisa no City Comparing',
    title: 'Da pergunta científica à ferramenta interativa',
    description:
      'O City Comparing foi criado para explorar uma questão central da pesquisa: como comparar pequenas e médias cidades entre países quando os indicadores e estruturas administrativas não seguem exatamente os mesmos padrões?',
    uses: [
      'Entender o problema de comparação entre países',
      'Navegar entre diferentes técnicas de análise',
      'Acessar comparações em diferentes escalas',
      'Conectar a pesquisa acadêmica a ferramentas exploratórias',
    ],
  },
  {
    id: 2,
    src: imagePath(2),
    alt: 'Painel principal do City Comparing',
    title: 'Escolha a escala da comparação',
    description:
      'O painel principal organiza a exploração em diferentes níveis. O usuário pode iniciar uma análise comparando cidades, países ou macrorregiões e depois aprofundar a investigação com técnicas de Econofísica e Visual Analytics.',
    uses: [
      'Comparar cidades',
      'Comparar países',
      'Comparar macrorregiões',
      'Acessar Normal Scatter',
      'Acessar Binscatter',
      'Acessar ScatterGraph',
      'Analisar DataFrames',
    ],
  },
  {
    id: 3,
    src: imagePath(3),
    alt: 'Comparação entre duas cidades no City Comparing',
    title: 'Compare duas cidades lado a lado',
    description:
      'A ferramenta permite selecionar países, estados ou regiões e cidades específicas para visualizar sua posição dentro da distribuição completa dos dados.',
    uses: [
      'Escolher duas cidades',
      'Comparar cidades do mesmo país ou de países diferentes',
      'Visualizar cada cidade em relação ao conjunto de municípios',
      'Identificar diferenças de população e indicador',
      'Explorar casos particulares sem perder o contexto da distribuição geral',
    ],
  },
  {
    id: 4,
    src: imagePath(4),
    alt: 'Módulo Normal Scatter do City Comparing',
    title: 'Explore os padrões do gráfico de dispersão',
    description:
      'O módulo Normal Scatter permite investigar a distribuição dos indicadores em diferentes escalas e configurações visuais, usando cores, regiões e boxplots para destacar padrões e diferenças.',
    uses: [
      'Escolher variáveis dos eixos X e Y',
      'Alternar entre país, macrorregião e estado/região',
      'Colorir os dados por categorias',
      'Visualizar distribuições marginais',
      'Comparar escala normal e logarítmica',
      'Investigar padrões livres de escala',
    ],
  },
  {
    id: 5,
    src: imagePath(5),
    alt: 'Módulo Binscatter do City Comparing',
    title: 'Reduza o ruído e revele tendências com Binscatter',
    description:
      'O processo Binscatter reorganiza a dispersão em intervalos, permitindo observar tendências que podem ficar escondidas em gráficos com milhares de pontos sobrepostos.',
    uses: [
      'Definir e avaliar diferentes números de bins',
      'Observar a distribuição dos dados',
      'Gerar a curva Binscatter',
      'Comparar Binscatter e Scatter',
      'Identificar mínimos, tendências e mudanças de comportamento',
      'Aplicar curvas de ajuste',
    ],
  },
  {
    id: 6,
    src: imagePath(6),
    alt: 'ScatterGraph e B-GCA no City Comparing',
    title: 'Transforme a dispersão em uma rede',
    description:
      'O ScatterGraph utiliza a abordagem B-GCA para converter relações de proximidade visual entre os pontos de um scatter plot em uma estrutura de grafo.',
    uses: [
      'Transformar pontos em nós',
      'Criar conexões por proximidade',
      'Ajustar o raio de corte',
      'Visualizar o grau dos nós',
      'Investigar regiões densas ou isoladas',
      'Explorar métricas de rede',
      'Usar o grafo como uma nova representação da mesma amostra',
    ],
  },
  {
    id: 7,
    src: imagePath(7),
    alt: 'Exploração interativa com Plotly no City Comparing',
    title: 'Investigue os dados diretamente no gráfico',
    description:
      'As visualizações interativas permitem sair de uma leitura estática e explorar pontos específicos, regiões do gráfico e informações associadas às cidades.',
    uses: [
      'Passar o mouse sobre os pontos',
      'Consultar informações individuais',
      'Selecionar regiões',
      'Dar zoom em áreas específicas',
      'Navegar pelas ferramentas do Plotly',
      'Explorar o gráfico de forma dinâmica',
    ],
  },
]

export default cityComparingStory
