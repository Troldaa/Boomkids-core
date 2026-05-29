import { modules, stats } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="page">
      <div className="shell">
        <header className="topbar">
          <a className="brand" href="/">
            <span className="brandMark">BK</span>
            <span>Boomkids Core</span>
          </a>
          <nav className="nav">
            <a href="#moduly">Moduly</a>
            <a href="/login">Přihlášení</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </header>

        <section className="hero">
          <div>
            <p className="eyebrow">Interní operační centrum</p>
            <h1>Jedno místo pro celý tým Boomkids.</h1>
            <p className="lead">Moderní portál pro marketing, tábory, pohybové aktivity, finance a interní Teplobook.</p>
            <div className="actions">
              <a className="btn btnPrimary" href="/login">Přihlásit se</a>
              <a className="btn btnGhost" href="/dashboard">Ukázat dashboard</a>
            </div>
            <div className="stats">
              {stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span className="muted">{stat.label}</span></div>)}
            </div>
          </div>
          <div className="loginCard">
            <span className="badge">Připraveno pro autentizaci</span>
            <h2>Rychlý vstup</h2>
            <p className="muted">Demo přihlašovací karta. V další fázi se napojí na Supabase, Firebase nebo NextAuth.</p>
            <form className="form">
              <input className="input" placeholder="E-mail" type="email" />
              <input className="input" placeholder="Heslo" type="password" />
              <a className="btn btnPrimary" href="/dashboard">Vstoupit do portálu</a>
            </form>
          </div>
        </section>

        <section className="section" id="moduly">
          <p className="eyebrow">Moduly</p>
          <h2>Kategorie Boomkids Core</h2>
          <div className="grid">
            {modules.map((module) => (
              <article className="module" key={module.slug}>
                <div className="moduleIcon">{module.icon}</div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <a className="badge" href={`/dashboard/${module.slug}`}>Otevřít modul</a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
