import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Boomkids Core',
  description: 'Interní portál pro tým Boomkids',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
