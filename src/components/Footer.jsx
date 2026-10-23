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
          <a href="https://leonardocamargorossato.github.io/LCR-SolutionsArchitecture-IA-Quantum/#/" target="_blank" rel="noreferrer">Portfólio</a>
          <a href="https://github.com/LeonardoCamargoRossato" target="_blank" rel="noreferrer">GitHub</a>
          <Link to="/research">Hub de Pesquisa</Link>
        </div>
      </div>
    </footer>
  )
}
