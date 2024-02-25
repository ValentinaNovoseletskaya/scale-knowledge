import './Footer.css';
import linkedin from '../../images/linkedin.svg';
import instagram from '../../images/instagram.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__icons">
                <a href="/"><img src={linkedin} className="footer__icon" alt="LinkedIn"/></a>
                <a href="/"><img src={instagram} className="footer__icon" alt="Instagram"/></a>
            </div>
            <div className="footer__container">
                <p className="footer__copyright">© Question Base 2022 • Created in Denmark</p>
                <div className="footer__links">
                    <a href="/" className="footer__link">Support</a>
                    <a href="/" className="footer__link">Privacy Policy</a>
                    <a href="/" className="footer__link">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;