import './globals.css'
import { pacifico } from './fonts/fonts'

export const metadata = {
  title: 'Wealth Being',
  description: 'A wealth and wellness tracking application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={pacifico.variable}>
      <body style={{ margin: 0, minHeight: '100vh', backgroundColor: '#ffffff', color: '#171717' }}>
        <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#171717' }}>
          {children}
        </div>
      </body>
    </html>
  )
}