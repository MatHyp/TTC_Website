import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import Navigation from '../components/MainPage/navigation/Navigation'
import Footer from '../components/MainPage/Footer/Footer';
import MainFooter from '../components/MainPage/Footer/MainFooter';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>

      <Head>
        <title>Technikum Technologii Cyfrowych</title>
        <meta name="description" content="Strona z informacjami na temat Technikum Technologi Cyfrowych" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
      <MainFooter />
    </>
  )
}

export default MyApp


