import { useEffect, useState } from 'react';
import { fetchAgenda, fetchLastMinuteNews } from '../services';
import Container from '../components/Container';
import NewsLayout from '../components/NewsLayout';
import NewsCard from '../components/NewsCard';
import Image from 'next/Image';
import clsx from 'clsx';

const Homepage = ({ agenda, lastMinuteNews }) => {
  const [lastMinute, setLastMinute] = useState([]);

  useEffect(() => {
    if (lastMinuteNews) {
      const [first, second, third] = lastMinuteNews.items;
      setLastMinute([first, second, third]);
    }
  }, [lastMinuteNews]);

  return (
    <Container className="pt-4">
      <NewsLayout>
        {lastMinute?.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.image}
              layout="responsive"
              width={300}
              height={200}
              alt={item.title}
              className="w-full"
            />

            <p
              className={clsx([
                'absolute p-4 bottom-0 w-full bg-brown text-white',
                'font-bold text-sm h-20 overflow-ellipsis'
              ])}
            >
              {item.title}
            </p>
          </div>
        ))}
      </NewsLayout>

      <NewsLayout className="mt-5">
        {agenda?.items.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </NewsLayout>
    </Container>
  );
};

export const getServerSideProps = async () => {
  const agenda = await fetchAgenda();
  const lastMinuteNews = await fetchLastMinuteNews();

  return {
    props: {
      agenda,
      lastMinuteNews
    }
  };
};

export default Homepage;
