import { modules, roles } from '@/lib/data';

export default function DashboardPage() {
  return (
    <>
      <p className="eyebrow">Dashboard</p>
      <h1>Vítej v Boomkids Core</h1>
      <p className="lead">Přehled interních modulů, rolí a priorit týmu.</p>
      <div className="panelGrid">
        {modules.map((module) => (
          <article className="card" key={module.slug}>
            <div className="moduleIcon">{module.icon}</div>
            <h2>{module.title}</h2>
            <p className="muted">{module.description}</p>
            <a className="badge" href={`/dashboard/${module.slug}`}>Otevřít</a>
          </article>
        ))}
      </div>
      <section className="section">
        <p className="eyebrow">Role</p>
        <div className="panelGrid">
          {roles.map((role) => <div className="card" key={role.name}><h3>{role.name}</h3><p className="muted">{role.description}</p></div>)}
        </div>
      </section>
    </>
  );
}
