import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Attyn - Intelligent Hierarchical Task Management Platform',
    template: '%s | Attyn'
  },
  description: 'Transform your organization with hierarchy-aware task management. Create custom organizational structures, manage tasks intelligently, and get real-time visibility across all levels. Start free trial today.',
  keywords: [
    'task management',
    'project management',
    'organizational hierarchy',
    'team collaboration',
    'workflow management',
    'business productivity',
    'real-time tracking',
    'enterprise software',
    'SaaS platform',
    'team coordination'
  ],
  authors: [{ name: 'Attyn Team' }],
  creator: 'Attyn',
  publisher: 'Attyn',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://attyn.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Attyn - Intelligent Hierarchical Task Management Platform',
    description: 'Transform your organization with hierarchy-aware task management. Create custom organizational structures, manage tasks intelligently, and get real-time visibility across all levels.',
    url: 'https://attyn.com',
    siteName: 'Attyn',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Attyn - Hierarchical Task Management Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Attyn - Intelligent Hierarchical Task Management Platform',
    description: 'Transform your organization with hierarchy-aware task management. Start your free trial today.',
    images: ['/og-image.png'],
    creator: '@attyn',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
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
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}