import { fetchTravel } from '../services';

export default function Travel({ news }) {
  return <div>Travel</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchTravel();

  return {
    props: {
      news
    }
  };
};
