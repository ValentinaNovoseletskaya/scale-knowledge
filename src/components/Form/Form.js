import './Form.css';
import leaves from "../../images/leaves.jpg";
import Button from '../Button/Button';

function Form() {
    return (
        <section className="form">
            <img src={leaves} className="form__image" alt="Leaves"></img>
            <form className="form__container">
                <h2 className="form__title">Scale knowledge effortlessly.</h2>
                <p className="form__description">We are gradually rolling out Question Base to teams. 
                Leave your contacts and be the first to know.</p>
                <fieldset className="form__inputs">
                    <input className="form__input"/>
                    <input className="form__input"/>
                    <input className="form__input"/>
                </fieldset>
                <div className="form__check">
                    <input type="checkbox" className="form__checkbox"/>
                    <label className="form__check-label">I agree with Question Base's Privacy Policy</label>
                </div>
                <Button className="button_send"></Button>
            </form>
        </section>
    );
}

export default Form;