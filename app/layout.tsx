import '@src/styles/globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Tmpl Nextjs',
  description: 'Nextjs 项目模板',
  keywords: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>1{children}</Providers>
      </body>
    </html>
  );
}
