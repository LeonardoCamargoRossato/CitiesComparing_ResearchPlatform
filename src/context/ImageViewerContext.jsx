import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ImageViewerContext = createContext(null)

export function ImageViewerProvider({ children }) {
  const [viewer, setViewer] = useState({ open: false, items: [], index: 0, collectionId: '' })

  const openViewer = useCallback(({ items, index = 0, collectionId = 'default' }) => {
    setViewer({ open: true, items, index, collectionId })
  }, [])
  const closeViewer = useCallback(() => setViewer((state) => ({ ...state, open: false })), [])
  const setIndex = useCallback((index) => setViewer((state) => ({ ...state, index })), [])

  const value = useMemo(() => ({ viewer, openViewer, closeViewer, setIndex }), [viewer, openViewer, closeViewer, setIndex])
  return <ImageViewerContext.Provider value={value}>{children}</ImageViewerContext.Provider>
}

export function useImageViewer() {
  const context = useContext(ImageViewerContext)
  if (!context) throw new Error('useImageViewer deve ser usado dentro de ImageViewerProvider')
  return context
}
