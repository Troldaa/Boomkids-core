export default function HomePage() {
  return (
    <main className="page authPage">
      <section className="authCard" aria-labelledby="login-title">
        <div className="authBrand">
          <span className="brandMark">BK</span>
          <div>
            <p className="eyebrow">Boomkids Core</p>
            <h1 id="login-title">Přihlášení</h1>
          </div>
        </div>

        <form className="form">
          <label>
            E-mail
            <input className="input" placeholder="jmeno@boomkids.cz" type="email" autoComplete="email" />
          </label>
          <label>
            Heslo
            <input className="input" placeholder="••••••••" type="password" autoComplete="current-password" />
          </label>
          <a className="btn btnPrimary" href="/dashboard">Přihlásit se</a>
        </form>
      </section>
    </main>
  );
}
