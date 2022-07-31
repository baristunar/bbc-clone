import { fetchTechnology } from '../services';

export default function Technology({ news }) {
  return <div>Technology</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchTechnology();

  return {
    props: {
      news
    }
  };
};
