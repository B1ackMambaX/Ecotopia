import logo from '../../resources/icons/logo_white.svg';
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="logo" className="footer__logo"/>
        </footer>
    );
};

export default Footer;