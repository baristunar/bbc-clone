import { fetchNews } from '../services';

export default function Home({ news }) {
  console.log('news', news);
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-error">Hello world!</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const news = await fetchNews();

  return {
    props: {
      news
    }
  };
};
