import { Maximize2 } from 'lucide-react'
import { useImageViewer } from '../context/ImageViewerContext'

export default function InteractiveImage({ item, items, index = 0, collectionId = 'default', className = '' }) {
  const { openViewer } = useImageViewer()
  const collection = items?.length ? items : [item]
  return (
    <button className={`interactive-image ${className}`} type="button" onClick={() => openViewer({ items: collection, index, collectionId })} aria-label={`Abrir imagem: ${item.alt || item.title || 'visualização'}`}>
      <img src={item.src} alt={item.alt || item.title || ''} />
      <span className="interactive-image__overlay"><Maximize2 size={22} /><span>Abrir imagem</span></span>
    </button>
  )
}
