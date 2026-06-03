import './global.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { StructuredData } from './components/StructuredData';
import { AIAboutSection } from './components/AIAboutSection';

export const metadata: Metadata = {
  metadataBase: new URL('https://codewdhruv.com'),
  title: {
    default: 'Dhrubajyoti Chakraborty',
    template: '%s | Dhrubajyoti Chakraborty',
  },
  description: 'I build things, think about intelligence, and occasionally write about both.',
  authors: [{ name: 'Dhrubajyoti Chakraborty' }],
  creator: 'Dhrubajyoti Chakraborty',
  openGraph: {
    title: 'Dhrubajyoti Chakraborty',
    description: 'I build things, think about intelligence, and occasionally write about both.',
    url: 'https://codewdhruv.com',
    siteName: 'Dhrubajyoti Chakraborty',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    title: 'Dhrubajyoti Chakraborty',
    card: 'summary',
    creator: '@codewdhruv',
  },
  alternates: {
    canonical: 'https://codewdhruv.com',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body>
        {children}
        <AIAboutSection />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
