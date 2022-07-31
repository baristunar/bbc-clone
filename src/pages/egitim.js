import { fetchEducation } from '../services';

export default function Education({ news }) {
  return <div>Education</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchEducation();

  return {
    props: {
      news
    }
  };
};
