import { fetchPhotoGallery } from '../services';

export default function PhotoGallery({ news }) {
  return <div>Photo Gallery</div>;
}

export const getServerSideProps = async () => {
  const news = await fetchPhotoGallery();

  return {
    props: {
      news
    }
  };
};
