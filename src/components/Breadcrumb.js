import Link from 'next/link';
import clsx from 'clsx';

const Breadcrumb = ({ links }) => {
  return (
    <div className='py-4'>
      <ul className="flex">
        {links.map((link, index) => {
          return (
            <li className="ml-2 first:ml-0" key={index}>
              <Link href={link.href}>
                <a
                  className={clsx([
                    'font-bold text-sm hover:text-primary',
                    index === links.length - 1
                      ? 'text-primary'
                      : 'text-gray-100'
                  ])}
                >
                  {index !== 0 ? '/' : ''} {link.text}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
