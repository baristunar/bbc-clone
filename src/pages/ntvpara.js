import { fetchNtvMoney } from '../services';

export default function Home({ news }) {
  return <div>Ntv Money</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchNtvMoney();

  return {
    props: {
      news
    }
  };
};
