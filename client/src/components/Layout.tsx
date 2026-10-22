import {useEffect, useState} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'

import Banner from './Banner'
import Navbar from './Navbar'
import Footer from './Footer'
import MessagePage from './MessagePage'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo(0, 0)
  }, [location.pathname])

  const [bannerHeight, setBannerHeight] = useState<number>(0)

  return (
    <>
      <header>
        <Banner callback={(height: number) => setBannerHeight(height)} />
        <Navbar />
      </header>
      <main className="flex" style={{minHeight: `calc(100vh - 80px - ${bannerHeight}px)`}}>
        <ErrorBoundary fallback={<GenericError />} key={location.pathname}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

function GenericError() {
  return (
    <MessagePage name="Error">
      An unexpected error has occurred.
      <br />
      We apologize for the inconvenience. Please try again later.
    </MessagePage>
  )
}
