export default function NotebookLibraryTags({ libraries }) {
  if (!libraries?.length) {
    return <p className="empty-state-note">Bibliotecas não listadas nesta etapa porque não foram confirmadas no material fornecido.</p>
  }

  return <div className="tag-cloud notebook-tags">{libraries.map((library) => <span key={library}>{library}</span>)}</div>
}
