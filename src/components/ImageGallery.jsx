import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import InteractiveImage from './InteractiveImage'

export default function ImageGallery({ items, autoplay = true, interval = 6500, collectionId = 'home-gallery' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const length = items.length

  useEffect(() => {
    if (!autoplay || paused || length <= 1) return undefined
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % length), interval)
    return () => window.clearInterval(timer)
  }, [autoplay, interval, length, paused])

  if (!length) return null
  const current = items[index]

  return (
    <div className="gallery" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="gallery__viewport">
        <InteractiveImage item={current} items={items} index={index} collectionId={collectionId} className="gallery__interactive-image" />
        {length > 1 && <>
          <button className="gallery__arrow gallery__arrow--left" onClick={() => setIndex((index - 1 + length) % length)} aria-label="Imagem anterior"><ChevronLeft /></button>
          <button className="gallery__arrow gallery__arrow--right" onClick={() => setIndex((index + 1) % length)} aria-label="Próxima imagem"><ChevronRight /></button>
        </>}
      </div>
      <div className="gallery__meta">
        <p>{current.caption}</p>
        {length > 1 && <div className="gallery__dots">{items.map((item, itemIndex) => <button key={item.src} className={itemIndex === index ? 'is-active' : ''} onClick={() => setIndex(itemIndex)} aria-label={`Mostrar imagem ${itemIndex + 1}`} />)}</div>}
      </div>
      <p className="asset-note">Adicione novas imagens em <code>public/assets/images/</code> e registre-as em <code>src/data/content.js</code>.</p>
    </div>
  )
}
