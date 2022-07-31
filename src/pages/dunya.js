import { fetchWorldNews } from '../services';

export default function World({ news }) {
  return <div>World</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchWorldNews();

  return {
    props: {
      news
    }
  };
};
