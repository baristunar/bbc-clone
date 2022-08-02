import Container from '../Container';
import FooterCopyright from './FooterCopyright';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <footer className="bg-primary-light pt-3 pb-5">
      <Container>
        <FooterCopyright />
        <FooterMenu />
        <FooterSocial />
      </Container>
    </footer>
  );
};

export default Footer;
