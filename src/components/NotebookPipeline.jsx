import { ArrowDown, ArrowRight } from 'lucide-react'

export default function NotebookPipeline({ items, compact = false }) {
  return (
    <div className={`notebook-pipeline${compact ? ' notebook-pipeline--compact' : ''}`} aria-label="Pipeline conceitual da pesquisa">
      {items.map((item, index) => (
        <div className="notebook-pipeline__segment" key={item}>
          <div className="notebook-pipeline__item">{item}</div>
          {index < items.length - 1 && (
            <span className="notebook-pipeline__arrow" aria-hidden="true">
              <ArrowRight className="notebook-pipeline__arrow-desktop" size={18} />
              <ArrowDown className="notebook-pipeline__arrow-mobile" size={18} />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
