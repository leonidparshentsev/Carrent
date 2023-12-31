import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import StoreProvider from '@/components/StoreProvider/StoreProvider'

export const metadata = {
  title: 'Carrent',
  description: 'Generated by create next app',
  icons: {
    icon: [ 
      {url: "/icon/icon16.png", sizes: "16x16", type: "image/png"},
      {url: "/icon/icon32.png", sizes: "32x32", type: "image/png"},
      {url: "/icon/icon96.png", sizes: "96x96", type: "image/png"},
      {url: "/icon/android-chrome-192.png", sizes: "192x192", type: "image/png"},
      {url: "/icon/android-chrome-512.png", sizes: "512x512", type: "image/png"},
    ],
    apple: [
      { url: "/icon/apple-touch-icon.png" },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  )
}
