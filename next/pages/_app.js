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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/ihh2vbs.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/ihh2vbs.css"></link>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
      <MainFooter />
    </>
  )
}

export default MyApp


