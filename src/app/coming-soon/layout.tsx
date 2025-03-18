import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coming Soon | ZORO Energy',
  description: 'This section is coming soon. Stay tuned for updates!'
}

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 