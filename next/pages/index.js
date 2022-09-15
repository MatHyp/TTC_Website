import Head from 'next/head'
import Navigation from '../components/navigation/Navigation'
import Header from '../components/Header/Header';
import MainAbout from '../components/AboutSchoolSeaction/MainAbout';
import DownHeader from '../components/Header/DownHeader';
import EventsList from '../components/Events/EventsList'
import Footer from '../components/Footer/Footer';
import { GlobalStyles } from '../components/GlobalStyles/GlobalStyles';
import MainFooter from '../components/Footer/MainFooter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Technikum Technologii Cyfrowych</title>
        <meta name="description" content="Strona z informacjami na temat Technikum Technologi Cyfrowych" />
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.typekit.net/ihh2vbs.css"></link>
      </Head>

      <GlobalStyles />
      <Navigation />
      <Header />
      <DownHeader />
      <MainAbout />
      <EventsList />
      <Footer />
      <MainFooter />
    </div>
  )
}
