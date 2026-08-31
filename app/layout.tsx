import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sabuflix — Sua central de mídia',
  description: 'Filmes, séries e tudo o que você ama em uma experiência rápida, elegante e feita para a sua tela.',
  openGraph: {
    title: 'Sabuflix — Sua central de mídia',
    description: 'Linda. Livre. Sua. Baixe o Sabuflix para Windows e Android.',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Sabuflix — Sua central de mídia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sabuflix — Sua central de mídia',
    description: 'Linda. Livre. Sua. Baixe o Sabuflix para Windows e Android.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
