import { fetchVideoGallery } from '../services';

export default function VideoGallery({ news }) {
  return <div>VideoGallery</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchVideoGallery();

  return {
    props: {
      news
    }
  };
};
