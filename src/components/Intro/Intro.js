import './Intro.css';
import Button from '../Button/Button';
import cup from '../../images/cup.jpg';
import talk from '../../images/talk.jpg';

function Intro() {
    return (
        <section className="intro" id="intro">
            <div className="intro__pictures">
                <img className="intro__horizontal-picture" src={cup} alt="Cup of coffee" /> 
                <img className="intro__vertical-picture" src={talk} alt="Talking person" />
            </div>
            <h1 className="intro__title">Scale knowledge</h1>
            <p className="intro__subtitle">Question Base is a new kind of knowledge base. 
            Powered by AI it answers your team’s questions inside Slack. Automatically.</p>
            <Button className="button_green"></Button>
        </section>
    );
}

export default Intro;