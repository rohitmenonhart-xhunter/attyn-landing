import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Attyn - Our Story & Mission',
  description: 'Discover how Attyn was born from a student\'s frustration with group project management and evolved into a revolutionary hierarchical task management platform.',
  openGraph: {
    title: 'About Attyn - Our Story & Mission',
    description: 'From university project struggles to revolutionary task management platform. Learn how Attyn transforms organizational productivity.',
    url: 'https://attyn.com/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Attyn - Our Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Attyn - Our Story & Mission',
    description: 'From university project struggles to revolutionary task management platform.',
    images: ['/og-about.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
