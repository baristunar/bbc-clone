import { fetchAutomobile, fetchEducation } from '../services';

export default function Automobile({ news }) {
  return <div>Automobile</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchAutomobile();

  return {
    props: {
      news
    }
  };
};
