import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  ['Início', '/'],
  ['Pesquisa', '/research'],
  ['Explorar Ferramentas', '/toolkit'],
  ['Notebooks', '/notebooks'],
  ['Sobre', '/about'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span>Cities Comparing</span>
          <small>Research Platform</small>
        </NavLink>
        <button className="nav-toggle" onClick={() => setOpen(!open)} aria-label="Abrir ou fechar menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
