import { fetchEducation } from '../services';
import Breadcrumb from '../components/Breadcrumb';
import { ROUTES } from '../constants/routes';
import Container from '../components/Container';
import NewsLayout from '../components/NewsLayout';
import NewsCard from '../components/NewsCard';

export default function Education({ news }) {
  return (
    <Container>
      <Breadcrumb
        links={[
          { text: 'Haberler', href: ROUTES.home },
          { text: 'Eğitim Haberleri', href: ROUTES.education }
        ]}
      />

      <NewsLayout>
        {news?.items.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </NewsLayout>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const news = await fetchEducation();

  return {
    props: {
      news
    }
  };
};
