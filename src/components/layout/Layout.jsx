import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div className="min-h-screen flex flex-col bg-black bg-fixed">
      <Navbar />
      <main className="flex-1 pt-25">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout