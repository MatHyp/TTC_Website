import Navigation from '../components/MainPage/navigation/Navigation'
import Header from '../components/MainPage/Header/Header';
import MainAbout from '../components/MainPage/AboutSchoolSeaction/MainAbout';
import DownHeader from '../components/MainPage/Header/DownHeader';
import EventsList from '../components/MainPage/Events/EventsList'

import axios from 'axios';

export default function Home({ articles, navRes }) {


  return (
    <div>
      <Navigation navData={navRes.data} />
      <Header />
      <DownHeader />
      <MainAbout />
      <EventsList events={articles.data} />
    </div>
  )
}

export async function getStaticProps() {
  const postsRes = await axios.get('http://localhost:1337/api/articles');
  const navRes = await axios.get('http://localhost:1337/api/strefies?fields=nazwaStrefy&populate=nawigacjas');

  return {
    props: {
      articles: postsRes.data,
      navRes: navRes.data
    },
  };
}
