import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mon App',
  description: 'Description de mon application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}