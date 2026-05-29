import { LoginForm } from '@/components/login-form';

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
        <LoginForm />
      </section>
    </main>
  );
}
