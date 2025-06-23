import type { ReactNode } from 'react'
import NavMenu from './NavMenu'
import Footer from './Footer'

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="container p-5 mx-auto max-w-7xl">
      <NavMenu />
      <main>
        <article>
          {children}
        </article>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
