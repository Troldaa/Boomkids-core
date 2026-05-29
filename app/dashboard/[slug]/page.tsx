import { notFound } from 'next/navigation';
import { modules } from '@/lib/data';

type Props = { params: Promise<{ slug: string }> };

export default async function ModulePage({ params }: Props) {
  const { slug } = await params;
  const module = modules.find((item) => item.slug === slug);
  if (!module) notFound();

  return (
    <>
      <p className="eyebrow">Modul</p>
      <h1>{module.icon} {module.title}</h1>
      <p className="lead">{module.description}</p>
      <div className="panelGrid">
        {module.items.map((item) => <article className="card" key={item}><h3>{item}</h3><p className="muted">Sekce připravená pro dokumenty, úkoly, poznámky a integrace.</p></article>)}
      </div>
    </>
  );
}
