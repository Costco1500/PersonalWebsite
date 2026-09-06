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

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (deploymentUrl ? `https://${deploymentUrl}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Alexander Wang | Machine Learning & AI Research',
  description: 'Research portfolio of Alexander Wang, a Mathematics and Computing student at Georgia Tech working across machine learning, scientific AI, natural language processing, computer vision, engineering, and environmental modeling.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Alexander Wang | Machine Learning & AI Research',
    description: 'Scientific AI, environmental modeling, NLP, computer vision, and AI for engineering.',
    type: 'website',
    images: [{ url: '/og.png', width: 1672, height: 941, alt: 'Alexander Wang — Machine Learning & AI Research' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alexander Wang | Machine Learning & AI Research',
    description: 'Scientific AI, environmental modeling, NLP, computer vision, and AI for engineering.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
