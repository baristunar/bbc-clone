import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import Icon from '../Icon';
import { FOOTER_MENUS } from '../../constants/footer-menu';

const FooterMenu = () => {
  const [menus, setMenus] = useState([...FOOTER_MENUS]);

  const accordionOnClick = (index) => {
    const menu = [...menus];
    menu[index].accordionActive = !menu[index].accordionActive;

    setMenus(menu);
  };
  return (
    <div className="py-4 grid grid-cols-1 lg:grid-cols-4 lg:border-b lg:border-b-white/10">
      {menus.map((menu, index) => (
        <div
          className="mt-4 lg:mt-0"
          key={index}
          onClick={() => accordionOnClick(index)}
        >
          <div className="flex items-center py-2 justify-between border-b border-b-white/10 lg:border-none lg:py-0">
            <h4 className="text-xs text-white/80 font-bold lg:text-sm">
              {menu.title}
            </h4>
            <Icon className="lg:hidden" icon="IconChevronDown" />
          </div>
          <ul
            className={clsx([
              menu.accordionActive ? 'block' : 'hidden',
              'lg:block'
            ])}
          >
            {menu.items.map((item, index) => (
              <li key={index} className="mt-2">
                <Link href={item.link}>
                  <a className="text-white/30 text-sm">{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
