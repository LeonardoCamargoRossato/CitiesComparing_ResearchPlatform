import { ChevronLeft, ChevronRight, RotateCcw, X, ZoomIn, ZoomOut } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useImageViewer } from '../context/ImageViewerContext'

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

export default function ImageLightbox() {
  const { viewer, closeViewer, setIndex } = useImageViewer()
  const [zoom, setZoom] = useState(100)
  const closeRef = useRef(null)
  const { open, items, index } = viewer
  const current = items[index]
  const hasMany = items.length > 1

  const previous = () => setIndex((index - 1 + items.length) % items.length)
  const next = () => setIndex((index + 1) % items.length)
  const changeZoom = (delta) => setZoom((value) => clamp(value + delta, 50, 300))

  useEffect(() => { if (open) setZoom(100) }, [open, index])

  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeViewer()
      if (event.key === 'ArrowLeft' && hasMany) previous()
      if (event.key === 'ArrowRight' && hasMany) next()
      if (event.key === '+' || event.key === '=') changeZoom(25)
      if (event.key === '-') changeZoom(-25)
      if (event.key === '0') setZoom(100)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, index, items.length, hasMany, closeViewer])

  if (!open || !current) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualizador de imagens" onMouseDown={(event) => { if (event.target === event.currentTarget) closeViewer() }}>
      <div className="lightbox__toolbar">
        <button onClick={() => changeZoom(-25)} aria-label="Diminuir zoom" title="Diminuir zoom"><ZoomOut /></button>
        <button onClick={() => changeZoom(25)} aria-label="Aumentar zoom" title="Aumentar zoom"><ZoomIn /></button>
        <button onClick={() => setZoom(100)} aria-label="Restaurar zoom" title="Restaurar zoom"><RotateCcw /></button>
        <button ref={closeRef} onClick={closeViewer} aria-label="Fechar visualizador" title="Fechar visualizador"><X /></button>
      </div>
      {hasMany && <button className="lightbox__nav lightbox__nav--left" onClick={previous} aria-label="Imagem anterior" title="Imagem anterior"><ChevronLeft /></button>}
      <div className="lightbox__stage">
        <div className="lightbox__scroll">
          <img src={current.src} alt={current.alt || current.title || ''} style={{ width: `${zoom}%` }} />
        </div>
      </div>
      {hasMany && <button className="lightbox__nav lightbox__nav--right" onClick={next} aria-label="Próxima imagem" title="Próxima imagem"><ChevronRight /></button>}
      <div className="lightbox__caption">
        <strong>{index + 1} de {items.length}</strong>
        {(current.title || current.caption) && <span>{current.title || current.caption}</span>}
        <span>{zoom}%</span>
      </div>
    </div>
  )
}
