import './globals.css'

export const metadata = {
  title: 'DavySousa',
  description: 'My WebSite',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className='scroll-smooth'>
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  )
}
