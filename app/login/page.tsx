export default function LoginPage() {
  return (
    <main className="page">
      <div className="shell hero">
        <section>
          <p className="eyebrow">Boomkids Core</p>
          <h1>Přihlášení týmu</h1>
          <p className="lead">Zabezpečený vstup do interního portálu. Formulář je připravený na napojení reálné autentizace.</p>
        </section>
        <section className="loginCard">
          <h2>Vstoupit do portálu</h2>
          <form className="form">
            <label>E-mail<input className="input" type="email" placeholder="jmeno@boomkids.cz" /></label>
            <label>Heslo<input className="input" type="password" placeholder="••••••••" /></label>
            <a className="btn btnPrimary" href="/dashboard">Přihlásit se</a>
            <a className="muted" href="/">Zpět na úvod</a>
          </form>
        </section>
      </div>
    </main>
  );
}
