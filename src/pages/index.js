import {
  fetchLastMinuteNews,
  fetchEconomy,
  fetchAgenda,
  fetchArt,
  fetchAutomobile,
  fetchEducation,
  fetchHealth,
  fetchLife,
  fetchNlife,
  fetchNtvMoney,
  fetchPhotoGallery,
  fetchSport,
  fetchTechnology,
  fetchTravel,
  fetchTurkeyNews,
  fetchVideoGallery,
  fetchWorldNews
} from '../services';

export default function Home({ news }) {
  console.log('news', news);
  return <div>test</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchPhotoGallery();

  return {
    props: {
      news
    }
  };
};
