import Link from 'next/link';
import Icon from '../Icon';

const FooterSocial = () => {
  return (
    <div className="mt-8 flex justify-center items-center">
      <h3 className="text-gray-100 font-bold text-sm">NTV`yi Keşfedin</h3>

      <ul className="flex gap-x-3 ml-5">
        <li>
          <Link href="https://twitter.com/ntv">
            <a target="_blank">
              <Icon
                className="fill-gray-100 transition-colors hover:fill-white"
                width={22}
                height={22}
                icon="IconTwitter"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.facebook.com/NTV">
            <a target="_blank">
              <Icon
                className="fill-gray-100 transition-colors hover:fill-white"
                width={22}
                height={22}
                icon="IconFacebook"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/ntv/">
            <a target="_blank">
              <Icon
                className="fill-gray-100 transition-colors hover:fill-white"
                width={22}
                height={22}
                icon="IconInstagram"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.youtube.com/ntv">
            <a target="_blank">
              <Icon
                className="fill-gray-100 transition-colors hover:fill-white"
                width={22}
                height={22}
                icon="IconYoutube"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://flipboard.com/@ntv">
            <a target="_blank">
              <Icon
                className="fill-gray-100 transition-colors hover:fill-white"
                width={22}
                height={22}
                icon="IconFlipboard"
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.ntv.com.tr/rss">
            <a target="_blank">
              <Icon
                className="fill-gray-100 transition-colors hover:fill-white"
                width={22}
                height={22}
                icon="IconRss"
              />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterSocial;
