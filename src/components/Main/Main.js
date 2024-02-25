import './Main.css';
import Intro from '../Intro/Intro';
import Quote from '../Quote/Quote';
import Example from '../Example/Example';
import Pricing from '../Pricing/Pricing';
import Benefits from '../Benefits/Benefits';
import Form from '../Form/Form';

function Main() {
    return (
        <main className="main">
            <Intro />
            <Quote />
            <Example />
            <Pricing />
            <Quote className="quote_pricing" />
            <Benefits />
            <Form />
        </main>
    );
}

export default Main;