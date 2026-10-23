import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <strong>Cities Comparing Research Platform</strong>
          <p>Econofísica • Visual Analytics • Ciência de Dados</p>
          <p>Criado por Leonardo Camargo Rossato</p>
        </div>
        <div className="footer__links">
          <Link to="/research">Pesquisa</Link>
          <Link to="/notebooks">Notebooks</Link>
          <a href="https://github.com/LeonardoCamargoRossato/CitiesComparing_ResearchPlatform" target="_blank" rel="noreferrer">GitHub</a>
          <Link to="/engine">Arquitetura / Roadmap</Link>
          <Link to="/about">Sobre</Link>
        </div>
      </div>
    </footer>
  )
}
