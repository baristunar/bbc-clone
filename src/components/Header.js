import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Logo from '../assets/images/logo.svg';
import Icon from './Icon';
import Link from 'next/link';
import colors from '../tailwind/colors';
import { ROUTES } from '../constants/routes';
import {NAV_MENU} from '../constants/nav-menu';

const Header = () => {
  return (
    <header>
      <div className="bg-primary">
        <div className="py-2 px-2 flex items-center lg:px-0 lg:container">
          <Image height={34} width={90} src={Logo} alt="Ntv Logo" />

          <ul className="flex ml-3 gap-x-2">
            <li className="flex items-center text-white ml-2">
              <Icon
                className="mr-2"
                icon="IconTv"
                color={colors.secondary.DEFAULT}
                width={11}
                height={10}
              />
              <Link href="/">
                <a className="text-sm">CANLI İZLE</a>
              </Link>
            </li>
            <li
              className={clsx([
                'hidden text-white  ml-2',
                'lg:flex lg:items-center'
              ])}
            >
              <Icon
                className="mr-2"
                icon="IconImages"
                color={colors.secondary.DEFAULT}
                width={11}
                height={10}
              />
              <Link href={ROUTES.photoGallery}>
                <a className="text-sm">FOTO GALERİ</a>
              </Link>
            </li>
            <li
              className={clsx([
                'hidden text-white  ml-2',
                'lg:flex lg:items-center'
              ])}
            >
              <Icon
                icon="IconCaretRight"
                color={colors.secondary.DEFAULT}
                width={20}
                height={15}
              />
              <Link href={ROUTES.videoGallery}>
                <a className="text-sm">VİDEO GALERİ</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-2 shadow-md">
        <nav className="px-2 lg:container lg:px-0">
          <ul className="flex gap-x-2 lg:gap-x-0 lg:justify-between">
            {NAV_MENU.map((item, index) => (
              <li key={index} className="flex items-center">
                <Link href={item.link}>
                  <a>
                    {item.image ? (
                      <Image
                        height={item.height}
                        width={item.width}
                        src={item.image}
                        alt={item.name}
                      />
                    ) : (
                      item.name
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
