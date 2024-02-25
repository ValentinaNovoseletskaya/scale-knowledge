import './Button.css';

function Button({className}) {
    return (        
        <>
            {(className === "button_green") ? (
                <button className="button button_green">SIGN UP</button>
            ) : (className === "button_send") ? (
                <button className="button button_send">SEND</button>
            ) : (
                <button className="button">SIGN UP</button>  
            )}
        </>
    );
}

export default Button;