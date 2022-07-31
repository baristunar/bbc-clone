import React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Logo from '../assets/images/logo.svg';
import NtvMoney from '../assets/images/ntv-money.svg';
import Nlife from '../assets/images/n-life.svg';
import Sport from '../assets/images/sport.svg';
import Astrology from '../assets/images/astrology.png';
import Icon from './Icon';
import Link from 'next/link';
import colors from '../tailwind/colors';
import { ROUTES } from '../constants/routes';

/* TODO: MANAGE MENUS FROM ARRAY */

const Header = () => {
  return (
    <header>
      <div className="bg-primary">
        <div className="py-2 flex items-center lg:container">
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
        <nav className="lg:container">
          <ul className="flex justify-between">
            <li className="text-primary font-bold">
              <Link href={ROUTES.turkey}>
                <a>Türkiye</a>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.ntvMoney}>
                <a>
                  <Image width="93" height="20" alt="Para" src={NtvMoney} />
                </a>
              </Link>
            </li>
            <li className="text-primary font-bold">
              <Link href={ROUTES.worldNews}>
                <a>Dünya</a>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.nlife}>
                <a>
                  <Image width="80" height="21" alt="N life" src={Nlife} />
                </a>
              </Link>
            </li>
            <li className="text-primary font-bold">
              <Link href={ROUTES.technology}>
                <a>Teknoloji</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <Image
                    width="93"
                    height="23"
                    alt="Astroloji"
                    src={Astrology}
                  />
                </a>
              </Link>
            </li>
            <li className="text-primary font-bold">
              <Link href={ROUTES.health}>
                <a>Sağlık</a>
              </Link>
            </li>
            <li>
              <Link href={ROUTES.sport}>
                <a>
                  <Image width="93" height="13" alt="Spor skor" src={Sport} />
                </a>
              </Link>
            </li>
            <li className="text-primary font-bold">
              <Link href="/">
                <a>Sürdürülebilirlik</a>
              </Link>
            </li>
            <li className="text-primary font-bold">
              <Link href={ROUTES.automobile}>
                <a>Otomobil</a>
              </Link>
            </li>
            <li className="text-primary font-bold">
              <Link href={ROUTES.education}>
                <a>Eğitim</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
