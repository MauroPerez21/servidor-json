
import Navlist from './navlist'
import Footer from './footer'

export default function DashboardLayout({children}) {
    return (
      <>
          <Navlist />
            {children}
          <Footer />
      </>
    )
  }