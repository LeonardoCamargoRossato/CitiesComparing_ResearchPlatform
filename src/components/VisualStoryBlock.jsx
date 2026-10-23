import InteractiveImage from './InteractiveImage'

export default function VisualStoryBlock({ story, index, items }) {
  const reverse = index % 2 === 1
  return (
    <article className={`visual-story ${reverse ? 'visual-story--reverse' : ''}`}>
      <div className="visual-story__image-wrap">
        <InteractiveImage item={story} items={items} index={index} collectionId="city-comparing-story" />
      </div>
      <div className="visual-story__content">
        <span className="visual-story__step">Etapa {story.id}</span>
        <h3>{story.title}</h3>
        <p>{story.description}</p>
        <h4>O que você pode fazer</h4>
        <ul>{story.uses.map((use) => <li key={use}>{use}</li>)}</ul>
      </div>
    </article>
  )
}
