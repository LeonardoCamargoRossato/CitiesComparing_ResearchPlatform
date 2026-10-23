import InteractiveImage from './InteractiveImage'

export default function NotebookResultsGallery({ figures = [], collectionId }) {
  if (!figures.length) {
    return (
      <div className="notebook-gallery-empty">
        <strong>Galeria preparada para resultados científicos.</strong>
        <p>Nenhuma imagem foi associada automaticamente nesta atualização para evitar inventar ou vincular screenshots sem confirmação.</p>
      </div>
    )
  }

  return (
    <div className="notebook-results-gallery">
      {figures.map((figure, index) => (
        <InteractiveImage
          key={figure.src}
          item={figure}
          items={figures}
          collectionId={collectionId}
          index={index}
        />
      ))}
    </div>
  )
}
