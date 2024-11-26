import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'The Wedding of Tiffany & Jared by Invitato',
  description: 'Generated by create next app',
  icons: 'favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className='antialiased h-screen'
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
