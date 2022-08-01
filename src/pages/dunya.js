import { fetchWorldNews } from '../services';
import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { ROUTES } from '../constants/routes';
import Container from '../components/Container';
import NewsLayout from '../components/NewsLayout';
import NewsCard from '../components/NewsCard';
import Carousel from '../components/Carousel';

export default function World({ news }) {
  const [heroSlides, setHeroSlides] = useState([]);

  useEffect(() => {
    if (news) {
      const slides = news.items.slice(0, 20);

      setHeroSlides(slides);
    }
  }, [news]);
  return (
    <Container>
      <Breadcrumb
        links={[
          { text: 'Haberler', href: ROUTES.home },
          { text: 'Dünya Haberleri', href: ROUTES.worldNews }
        ]}
      />
      <Carousel slides={heroSlides} className="mt-4" />

      <NewsLayout className="mt-4">
        {news?.items.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </NewsLayout>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const news = await fetchWorldNews();

  return {
    props: {
      news
    }
  };
};
