
import Navlist from './navlist'
import Footer from './footer'
export default function DashboardLayout({children}) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Navlist />
        {children}
        <Footer />
      </section>
    )
  }