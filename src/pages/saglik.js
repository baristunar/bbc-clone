import { fetchHealth } from '../services';

export default function Home({ news }) {
  return <div>Health</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchHealth();

  return {
    props: {
      news
    }
  };
};
