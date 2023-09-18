import '@/styles/globals.css'
import Navbar from './NavBar/navBar'
import Footer from './Footer/footer'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Bambú - Alma Emprendedora</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
