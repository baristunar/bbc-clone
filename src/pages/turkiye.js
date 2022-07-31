import { fetchTurkeyNews } from '../services';

export default function TurkeyNews({ news }) {
  return <div>Turkey News</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchTurkeyNews();

  return {
    props: {
      news
    }
  };
};
