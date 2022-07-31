import { fetchArt } from '../services';

export default function Home({ news }) {
  return <div>Art</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchArt();

  return {
    props: {
      news
    }
  };
};
