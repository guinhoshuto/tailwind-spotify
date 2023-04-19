import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'wawawawa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-zinc-800 text-zinc-50' lang="en">
      <body>{children}</body>
    </html>
  )
}
