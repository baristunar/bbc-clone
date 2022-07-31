import { fetchLastMinuteNews } from '../services';

export default function LastMinuteNews({ news }) {
  return <div>Last minute</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchLastMinuteNews();

  return {
    props: {
      news
    }
  };
};
