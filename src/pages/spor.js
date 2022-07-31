import { fetchSport } from '../services';

export default function Sport({ news }) {
  return <div>Sport</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchSport();

  return {
    props: {
      news
    }
  };
};
