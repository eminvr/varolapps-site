import { Outlet } from 'react-router'
import { AutoLocaleRedirect } from './AutoLocaleRedirect'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-950">
      <AutoLocaleRedirect />
      <Header />
      <main className="flex-1" id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
