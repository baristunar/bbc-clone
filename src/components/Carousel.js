import { useState } from 'react';
import Image from 'next/Image';
import clsx from 'clsx';
import Icon from './Icon';
import colors from '../tailwind/colors';

const Carousel = ({ slides, className }) => {
  const [slide, setSlide] = useState(0);

  const handleLeftArrow = () => {
    if (slide === 0) {
      setSlide(slides.length - 1);
    } else setSlide(slide - 1);
  };

  const handlerightArrow = () => {
    if (slide === slides.length - 1) {
      setSlide(0);
    } else setSlide(slide + 1);
  };

  return (
    <div className={`${className}`}>
      {slides.map((item, index) => (
        <div key={index} hidden={slide !== index}>
          <div className="relative h-96">
            <Image layout="fill" src={item.image} alt={item.title} />
            <p
              className={clsx([
                'absolute text-sm p-4 bottom-0 w-full bg-brown text-white lg:text-2xl',
                'font-bold text-sm h-20 overflow-ellipsis'
              ])}
            >
              {item.title}
            </p>

            <button
              onClick={handleLeftArrow}
              className={clsx([
                'absolute rounded-full w-11 h-11 bg-white bg-opacity-50 flex justify-center items-center',
                'top-1/2 left-2 transform -translate-y-1/2 lg:hidden'
              ])}
            >
              <Icon
                height={30}
                width={30}
                icon="IconArrowLeft"
                color={colors.primary}
              />
            </button>
            <button
              onClick={handlerightArrow}
              className={clsx([
                'absolute rounded-full w-11 bg-white bg-opacity-50 h-11 flex justify-center items-center',
                'top-1/2 right-2 transform -translate-y-1/2 lg:hidden'
              ])}
            >
              <Icon
                height={30}
                width={30}
                icon="IconArrowRight"
                color={colors.primary}
              />
            </button>
          </div>

          <div className="bg-white py-3 px-2 flex justify-between shadow-md">
            {slides.map((item, index) => (
              <button
                className={clsx([
                  'hidden w-11 h-11 transition-colors rounded-full',
                  'font-bold border border-gray hover:bg-brown hover:text-white lg:block',
                  slide === index
                    ? 'bg-brown text-white'
                    : 'bg-white text-primary'
                ])}
                key={index}
                onMouseEnter={() => setSlide(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
