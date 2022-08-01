import Image from 'next/image';

const NewsCard = ({item}) => {
  return (
    <div>
      <Image
        src={item.image}
        layout="responsive"
        width={300}
        height={200}
        alt={item.title}
        className="w-full"
      />
      <div className="bg-white shadow-md p-5 h-28">
        <h2 className="text-primary font-bold">{item.title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;
