import { useState } from 'react';
import Icon from './Icon';
import { NAV_MENU } from '../constants/nav-menu';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

const HamburgerMenu = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={className} onClick={onClickHandler}>
        <Icon
          icon={isOpen ? 'IconClose' : 'IconHamburger'}
          width="20"
          height="20"
        />
      </button>

      <div
        className={clsx([
          'absolute bg-gray inset-0 top-[3.125rem] z-50 transition-all duration-700',
          isOpen ? 'visible w-full' : 'invisible w-0'
        ])}
      >
        <nav className="mt-10">
          <ul className="grid grid-cols-3 sm:grid-cols-3 gap-y-10 justify-items-center">
            {NAV_MENU.map((item, index) => (
              <li key={index} className="flex items-center group">
                <Link href={item.link}>
                  <a onClick={onClickHandler}>
                    {item.image ? (
                      <Image
                        height={item.height}
                        width={item.width}
                        src={item.image}
                        alt={item.name}
                      />
                    ) : (
                      <span className="text-primary text-sm font-bold group-first:text-brown">
                        {item.name}
                      </span>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default HamburgerMenu;
