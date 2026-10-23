import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ImageLightbox from './components/ImageLightbox'
import Home from './pages/Home'
import ResearchHub from './pages/ResearchHub'
import ResearchPresentations from './pages/ResearchPresentations'
import InteractiveNotebooks from './pages/InteractiveNotebooks'
import NotebookDetailPage from './pages/NotebookDetailPage'
import AnalysisToolkit from './pages/AnalysisToolkit'
import CityComparingLegacy from './pages/CityComparingLegacy'
import PythonEngine from './pages/PythonEngine'
import About from './pages/About'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchHub />} />
          <Route path="/research/presentations" element={<ResearchPresentations />} />
          <Route path="/notebooks" element={<InteractiveNotebooks />} />
          <Route path="/notebooks/:slug" element={<NotebookDetailPage />} />
          <Route path="/toolkit" element={<AnalysisToolkit />} />
          <Route path="/toolkit/citiesComparing_versaoAlphaStreamlit" element={<CityComparingLegacy />} />
          <Route path="/engine" element={<PythonEngine />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <ImageLightbox />
    </div>
  )
}
