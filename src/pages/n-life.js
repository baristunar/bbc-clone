import { fetchNlife } from '../services';

export default function Nlife({ news }) {
  return <div>N-Life</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchNlife();

  return {
    props: {
      news
    }
  };
};
