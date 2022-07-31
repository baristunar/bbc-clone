import { fetchEconomy } from '../services';

export default function Economy({ news }) {
  return <div>Economy</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchEconomy();

  return {
    props: {
      news
    }
  };
};
