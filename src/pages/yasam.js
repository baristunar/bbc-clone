import { fetchLife } from '../services';

export default function Life({ news }) {
  return <div>Life</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchLife();

  return {
    props: {
      news
    }
  };
};
