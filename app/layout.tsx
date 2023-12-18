import '@src/styles/globals.css';
import { Metadata } from 'next';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Tmpl Nextjs',
  description: 'Nextjs 项目模板',
  keywords: [],
};

export default function RootLayout({
  children,
  login,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {login}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
