export const stats = [
  { value: '5', label: 'hlavních modulů' },
  { value: '6', label: 'týmových rolí' },
  { value: '24/7', label: 'přístup k informacím' },
];

export const roles = [
  { name: 'Admin', description: 'Správa uživatelů, oprávnění a celého portálu.' },
  { name: 'Marketing', description: 'Kampaně, sociální sítě a vizuální komunikace.' },
  { name: 'Finance', description: 'Rozpočty, platby, faktury a reporting.' },
  { name: 'Lektor', description: 'Lekce, docházka, metodika a materiály.' },
  { name: 'Koordinátor táborů', description: 'Turnusy, kapacity, program a provoz táborů.' },
  { name: 'Vedení', description: 'Strategie, přehledy, priority a rozhodování.' },
];

export const modules = [
  { slug: 'marketing', icon: '📣', title: 'Marketing', description: 'Kampaně, sociální sítě, grafika, fotky a komunikační plán.', items: ['Kalendář kampaní', 'Sociální sítě', 'Grafické podklady', 'Newslettery'] },
  { slug: 'primestske-tabory', icon: '🏕️', title: 'Příměstské tábory', description: 'Turnusy, přihlášky, kapacity, programy a organizační checklisty.', items: ['Turnusy', 'Přihlášky', 'Programy', 'Checklisty'] },
  { slug: 'pohybove-aktivity', icon: '🤸', title: 'Pohybové aktivity', description: 'Kroužky, lekce, lektoři, metodika, docházka a rozvrhy.', items: ['Rozvrh lekcí', 'Lektoři', 'Docházka', 'Metodika'] },
  { slug: 'finance', icon: '💳', title: 'Finance', description: 'Rozpočty, faktury, platby, přehled nákladů a výnosů.', items: ['Rozpočty', 'Faktury', 'Platby', 'Reporting'] },
  { slug: 'teplobook-boomkids', icon: '📘', title: 'Teplobook Boomkids', description: 'Interní wiki, know-how, pravidla, návody a týmové postupy.', items: ['Manuály', 'Postupy', 'Pravidla', 'Know-how'] },
] as const;
