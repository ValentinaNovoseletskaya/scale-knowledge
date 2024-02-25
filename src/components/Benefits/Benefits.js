import './Benefits.css';
import icon from '../../images/icon.svg';

function Benefits() {
    return (
        <section className="benefits" id="benefits">
            <img className="benefits__icon" src={icon} alt='Planet icon' />
            <h2 className="benefits__title">Most team leads spend their time answering the same questions over and over. Not anymore.</h2>
            <div className="benefits__cards">
                <div className="benefits__card benefits__card_pink">
                    <p className="benefits__card-number">01</p>
                    <p className="benefits__card-title">Scale up knowledge</p>
                    <p className="benefits__card-description">Your Slack contains a wealth of knowledge. 
                    Question Base’s AI uncovers and surfaces these insights to your team.</p>
                </div>
                <div className="benefits__card benefits__card_yellow">
                    <p className="benefits__card-number">02</p>
                    <p className="benefits__card-title">Reduce interruptions</p>
                    <p className="benefits__card-description">Let people get the answers they need without interrupting the work of others. 
                    Right from inside Slack.</p>
                </div>
                <div className="benefits__card benefits__card_green">
                    <p className="benefits__card-number">03</p>
                    <p className="benefits__card-title">Grow organically</p>
                    <p className="benefits__card-description">There’s no extra work involved. 
                    Once you add Question Base to a Slack channel it will automatically start answering to questions.</p>
                </div>
            </div>
        </section>
    );
}

export default Benefits;