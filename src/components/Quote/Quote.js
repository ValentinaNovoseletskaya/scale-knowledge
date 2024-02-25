import './Quote.css';

function Quote({className}) {
    return (
    <>
        {(className === 'quote_pricing') ? (
            <section className="quote quote_pricing">
                <h2 className="quote__line quote__line_pricing">“No tiers, no complexity. Pay only for what you use.”</h2>
                <p className="quote__author">— Yana, CSO Question Base</p>
            </section>            
        ) : (
            <section className="quote">
                <h2 className="quote__line">“Growing fast requires fast answers."</h2>
                <p className="quote__author">— Kasper, CEO Question Base</p>
            </section>
        )}
    </>
)};

export default Quote;