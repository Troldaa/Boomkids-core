import { modules } from '@/lib/data';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="layout">
      <aside className="sidebar">
        <a className="brand" href="/dashboard"><span className="brandMark">BK</span><span>Core</span></a>
        <nav className="sideNav">
          <a href="/dashboard">Přehled</a>
          {modules.map((module) => <a key={module.slug} href={`/dashboard/${module.slug}`}>{module.icon} {module.title}</a>)}
          <a href="/">Odhlásit</a>
        </nav>
      </aside>
      <section className="content">{children}</section>
    </main>
  );
}
