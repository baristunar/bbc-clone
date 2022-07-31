import axios from 'axios';

export default function Home({ news }) {
console.log('news', news)
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-error">Hello world!</h1>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:3000/api/news');

  return {
    props: {
      news : response.data
    }
  };
};
