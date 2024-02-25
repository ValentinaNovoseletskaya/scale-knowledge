import './Example.css';
import screenshot from '../../images/screenshot.jpg';
import girl from '../../images/girl.jpg';

function Example() {
    return (
        <section className='example'>
            <img className='example__screenshot' src={screenshot} alt='Screenshot' />
            <div className='example__right-side'>
                <h2 className='example__title'>Instant answers inside Slack.</h2>
                <p className='example__subtitle'>Question Base actively monitors the conversation and discretely answers people when a new question is posted.</p>
                <img className='example__photo' src={girl} alt='Female' />
                <p className='example__text'>Questions Base AI identifies when a question is posted and provides an answer within 3 sec.</p>
            </div>
        </section>
    );
}

export default Example;