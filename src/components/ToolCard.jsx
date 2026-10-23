import StatusBadge from './StatusBadge'

export default function ToolCard({ icon: Icon, title, description, status = 'Em desenvolvimento' }) {
  return (
    <article className="card compact-card">
      <div className="card-row">
        <div className="icon-wrap">{Icon && <Icon size={20} />}</div>
        <StatusBadge>{status}</StatusBadge>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="tool-state-note">Interface ainda não conectada ao backend.</p>
    </article>
  )
}
