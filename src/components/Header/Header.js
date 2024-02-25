import './Header.css';
import Button from '../Button/Button';

function Header() {
    return (
        <header className="header">
            <ul className="header__menu">
                <li><a href="#intro" className="header__line">How it works</a></li>
                <li><a href="#pricing" className="header__line">Pricing</a></li>
                <li><a href="#benefits" className="header__line">Benefits</a></li>
            </ul>
            <Button />
        </header>
    );
}

export default Header;