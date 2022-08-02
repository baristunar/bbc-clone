import Image from 'next/image';
import Logo from '../../assets/images/logo.svg';

const FooterCopyright = () => {
  return (
    <div className="flex items-center pb-3 border-b border-b-white/10">
      <Image src={Logo} alt="logo" width={90} height={34} />
      <p className="text-white/50 text-sm ml-4">
        &copy;Copyright {new Date().getFullYear()} | Tüm Hakları Saklıdır.
      </p>
    </div>
  );
};

export default FooterCopyright;
