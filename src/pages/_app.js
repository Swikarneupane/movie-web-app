import "@/styles/globals.css"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <div className=" max-h-screen">
      <div className="w-full">
        <Sidebar />
      </div>
      <Component {...pageProps} />
      <div className=" -mt-9">
        <Footer />
      </div>
    </div>
  )
}
