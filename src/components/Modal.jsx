import { X } from 'lucide-react'

export default function Modal({ open, title, children, onClose }) {
  if (!open) return null
  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar"><X size={18} /></button>
        <h3>{title}</h3>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  )
}
